import AWS from 'aws-sdk';
const invokeLambda = (payload) => {
    const lambda = new AWS.Lambda();
    const params = {
        FunctionName: 'fetch-lambda',
        Payload: JSON.stringify(payload),
    };
    return lambda.invoke(params).promise();
};

export default invokeLambda;