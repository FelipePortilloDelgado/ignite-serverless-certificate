

export const handle = async (event) => {
    return {
        statusCode: 201,
        body: JSON.stringify({
            message: 'Hello world ignite serverless'
        }),
        header: {
            'Content-Type': 'application/json'
        }
    }
}