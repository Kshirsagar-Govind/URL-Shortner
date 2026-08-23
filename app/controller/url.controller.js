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

module.exports = {
  CREATE_SHORT_URL,
  REDIRECT_TO_URL,
};
