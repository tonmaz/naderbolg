const SellingPartnerAPI = require("amazon-sp-api");
const axios = require("axios");

exports.handler = async (event) => {
  async function getUser() {
    try {
      const response = await axios.get(
        "https://sellingpartnerapi-na.amazon.com/catalog/2020-12-01/items/B016MO90GW?marketplaceIds=ATVPDKIKX0DER&includedData=attributes,identifiers,images,productTypes,salesRanks,summaries,variations,vendorDetails"
      );
      // console.log(response);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  return getUser();
  // let res;
  // await (async () => {
  //   try {
  //     let sellingPartner = new SellingPartnerAPI({
  //       region: "eu", // The region to use for the SP-API endpoints ("eu", "na" or "fe")
  //       // refresh_token: "<REFRESH_TOKEN>",
  //       credentials: {
  //         SELLING_PARTNER_APP_CLIENT_ID:
  //           "amzn1.sp.solution.69a50f4e-2ab0-4bdc-ad39-053396c104eb",
  //         SELLING_PARTNER_APP_CLIENT_SECRET:
  //           "9546dd94832aabdf0e67c731217b228353edadddc0fb5555e4fe7b83bcfe56ff",
  //         AWS_ACCESS_KEY_ID: "AKIA43BGGJAITGBVJFWO",
  //         AWS_SECRET_ACCESS_KEY: "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",
  //         AWS_SELLING_PARTNER_ROLE:
  //           "arn:aws:iam::882695882769:role/Seller_app_Role",
  //       },
  //       options: {
  //         only_grantless_operations: false,
  //       }, // The refresh token of your app user
  //     });
  //     res = await sellingPartner.callAPI({
  //       operation: "getMarketplaceParticipations",
  //       endpoint: "sellers",
  //     });
  //     console.log(res);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // })();
  //
  // return res;
};
