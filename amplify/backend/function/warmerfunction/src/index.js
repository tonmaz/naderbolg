/* Amplify Params - DO NOT EDIT
	API_NADERAPI_GRAPHQLAPIENDPOINTOUTPUT
	API_NADERAPI_GRAPHQLAPIIDOUTPUT
	API_NADERAPI_GRAPHQLAPIKEYOUTPUT
	AUTH_NADERBLOGF6B2A368_USERPOOLID
	ENV
	FUNCTION_NADERFUNCTION_NAME
	REGION
Amplify Params - DO NOT EDIT */

exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  }, 
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
