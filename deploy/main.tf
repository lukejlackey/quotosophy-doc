provider "aws" {
  region = "us-west-1"
}

resource "aws_s3_bucket" "qd-codepipeline-s3-bucket" {
  bucket        = var.bucket_name
  acl           = "public-read"
  force_destroy = true

  website {
    index_document = "index.html"
  }
}

resource "aws_s3_bucket_policy" "s3_bucket_policy" {
  bucket = aws_s3_bucket.qd-codepipeline-s3-bucket.id
  policy = <<POLICY
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::${var.bucket_name}/*"
    }
  ]
}
POLICY
}

resource "aws_codepipeline" "qd-codepipeline" {
  name     = "quotosophy-docs-pipeline"
  role_arn = aws_iam_role.codepipeline_role.arn

  artifact_store {
    location = aws_s3_bucket.qd-codepipeline-s3-bucket.bucket
    type     = "S3"

  }

  stage {
    name = "Source"

    action {
      name             = "Source"
      category         = "Source"
      owner            = "ThirdParty"
      provider         = "GitHub"
      version          = "1"
      output_artifacts = ["source_output"]

      configuration = {
        Owner      = var.github_username
        Repo       = var.github_project_name
        Branch     = "master"
        OAuthToken = var.github_token
      }
    }
  }

  stage {
    name = "Build"

    action {
      name             = "Build"
      category         = "Build"
      owner            = "AWS"
      provider         = "CodeBuild"
      input_artifacts  = ["source_output"]
      output_artifacts = ["build_output"]
      version          = "1"

      configuration = {
        ProjectName = "quotosophy-docs-codebuild"
      }
    }
  }

  stage {
    name = "Deploy"

    action {
      name            = "Deploy"
      category        = "Deploy"
      owner           = "AWS"
      provider        = "S3"
      input_artifacts = ["build_output"]
      version         = "1"

      configuration = {
        BucketName = aws_s3_bucket.qd-codepipeline-s3-bucket.bucket
        Extract    = "true"
      }
    }
  }
}

resource "aws_codebuild_project" "qd-codebuild" {
  name          = "quotosophy-docs-codebuild"
  description   = "quotosophy-docs-codebuild"
  build_timeout = "5"
  service_role  = aws_iam_role.codebuild_role.arn

  artifacts {
    type = "CODEPIPELINE"
  }

  environment {
    compute_type                = "BUILD_GENERAL1_SMALL"
    image                       = "aws/codebuild/standard:4.0"
    type                        = "LINUX_CONTAINER"
    image_pull_credentials_type = "CODEBUILD"
  }

  source {
    type = "CODEPIPELINE"
  }
}

data "archive_file" "zip_lambda" {
  type        = "zip"
  source_dir  = "lambda/handler"
  output_path = "${path.module}/.terraform/archive_files/handler.zip"

  depends_on = [null_resource.main]
}

resource "aws_lambda_function" "fetch_lambda" {
  filename      = "${path.module}/.terraform/archive_files/handler.zip"
  function_name = "fetch-lambda"
  role          = aws_iam_role.fetch_lambda_role.arn
  handler       = "exports.handler"
  runtime       = "nodejs16.x"

  source_code_hash = data.archive_file.main.output_base64sha256
}

resource "aws_lambda_permission" "allow_s3_invoke" {
  statement_id  = "AllowS3Invoke"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.fetch_lambda.function_name
  principal     = "s3.amazonaws.com"
  source_arn    = aws_s3_bucket.qd-codepipeline-s3-bucket.arn
}

