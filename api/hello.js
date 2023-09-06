exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello, serverless world!" }),
    headers: {
      "Access-Control-Allow-Origin": "https://kidekko.dev",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET",
    },
  };
};
