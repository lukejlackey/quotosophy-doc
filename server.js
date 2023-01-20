const PORT = 8000;
const express = require('express');
const cors = require('cors');
const aws = require('@aws-sdk/client-secrets-manager')

const secret_name = "clientAPIKey";

const client = new aws.SecretsManagerClient({
    region: "us-east-1",
});

let getSecret = async () => {
    try {
        let response = await client.send(
            new aws.GetSecretValueCommand({
                SecretId: secret_name,
                VersionStage: "AWSCURRENT",
            })
        );
        return JSON.parse(response.SecretString).quotosophyKey;
    } catch (error) {
        throw error;
    }
}

const corsOptions = {
    origin: 'http://127.0.0.1:3000',
    optionsSuccessStatus: 200
}

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

app.get('/api/routes', async (req, res) => {
    const { route, method } = req.headers;
    const response = await fetch(route, {
        method,
        headers: {
            'x-api-key': await getSecret()
        }
    })
    return res.send(await response.json());
});

app.put('/api/key/reset', async (req, res) => {
    const { method, headers } = req.headers;
    const response = await fetch("https://api.quotosophy.com/reset", {
        method,
        headers: {
            'x-api-key': await getSecret(),
            ...headers
        }
    })
    return res.send(response);
});

app.get('/api/key/recover', async (req, res) => {
    const { method, email } = req.headers;
    const response = await fetch("https://api.quotosophy.com/recover", {
        method,
        headers: {
            'x-api-key': await getSecret(),
            email,
        }
    })
    return res.send(response);
});

app.listen(PORT, () => console.log(`Backend running on port: ${PORT}`));
