const { ShortCode } = require("../helpers/codeGenerator.helpers");
const URLSchema = require("../models/url.model");

const CREATE_SHORT_URL = async (URL) => {
  try {
    let code = ShortCode();
    let result = await URLSchema.create({
      shortCode: code,
      history: [],
      redirectTo: URL,
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

const REDIRECT_TO_URL = async (shortCode, clientIp) => {
  try {
    let result = await URLSchema.findOneAndUpdate(
      {
        shortCode: shortCode,
      },
      {
        $push: {
          history: {
            ip: clientIp,
          },
        },
      },
    );
    return result.redirectTo;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  CREATE_SHORT_URL,
  REDIRECT_TO_URL,
};
