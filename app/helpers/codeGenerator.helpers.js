const randomstring = require("randomstring");
const ShortCode = () => {
  try {
    let code = randomstring.generate({
      length: 6,
      charset: "alphanumeric",
    });
    return code;
  } catch (error) {
    return error;
  }
};
const DocumentId = () => {
  try {
    let docId = randomstring.generate({
      length: 10,
      charset: "numeric",
    });
    return docId;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  DocumentId,
  ShortCode,
};
