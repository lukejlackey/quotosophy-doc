const aws = require('aws-sdk');

const secret_name = "clientAPIKey";

const ssm = new aws.SSM();

const getKey = async () => {
    try {
        const parameter = await ssm.getParameter({
            Name: secret_name,
            WithDecryption: true
        }).promise();
        const key = JSON.parse(parameter.Parameter.Value);
        return key;
    } catch (error) {
        throw error;
    }
}

export const handler = async (event) => {
    const { route, method, data } = event;
    const response = await fetch(route, {
        method,
        headers: {
            'x-api-key': await getKey(),
            ...data
        }
    })
    return res.send(await response.json());
}