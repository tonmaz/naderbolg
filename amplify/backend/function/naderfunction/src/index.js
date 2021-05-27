/* Amplify Params - DO NOT EDIT
	API_NADERAPI_GRAPHQLAPIENDPOINTOUTPUT
	API_NADERAPI_GRAPHQLAPIIDOUTPUT
	API_NADERAPI_GRAPHQLAPIKEYOUTPUT
	API_NADERAPI_POSTTABLE_ARN
	API_NADERAPI_POSTTABLE_NAME
	AUTH_NADERBLOGF6B2A368_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

async function getProductById(postId) {
  const params = {
    TableName: "Post-oz5figfvu5d4vfwweosbgxdsla-dev",
    Key: { id: postId },
  };
  try {
    const { Item } = await docClient.get(params).promise();
    return Item;
  } catch (err) {
    console.log("DynamoDB error: ", err);
  }
}

exports.handler = async (event) => {
  // TODO implement
  if (!event.arguments.postId) {
    return;
  }
  const response = await getProductById(event.arguments.postId);
  return response;
};
