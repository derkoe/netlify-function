exports.handler = async function (event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Hello, World!', body: event.body, }),
        query: event.queryStringParameters
    };
}

