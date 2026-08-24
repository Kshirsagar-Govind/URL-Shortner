const URLServices = require("../services/url.service");

const CREATE_SHORT_URL = async (req, res) => {
  try {
    let { URL } = req.body;
    if (!URL) throw "Reuired valid URL";
    let result = await URLServices.CREATE_SHORT_URL(URL);
    return res.status(201).json({ message: "Short url created", result });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ message: error.message || "Something went wrong" });
  }
};

const REDIRECT_TO_URL = async (req, res) => {
  try {
    let { shortCode } = req.params;
    const clientIp =
      req.headers["x-forwarded-for"]?.split(",")[0].trim() ||
      req.socket.remoteAddress;
    console.log(clientIp);

    if (!shortCode) throw "Short code not provided";
    let url = await URLServices.REDIRECT_TO_URL(shortCode, clientIp);
    res.redirect(url);
  } catch (error) {
    console.log(error);
  }
};

const SHORT_URL_ANALYTICS = async (req, res) => {
  try {
    let { shortCode } = req.params;
    let result = await URLServices.SHORT_URL_ANALYTICS(shortCode);
    return res.status(200).json({ data: result, message: "Data fetched." });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  CREATE_SHORT_URL,
  REDIRECT_TO_URL,
  SHORT_URL_ANALYTICS,
};
