const express = require("express");
const router = express.Router();
const URLController = require("../controller/url.controller");

router.post("/short-url", URLController.CREATE_SHORT_URL);
router.get("/redirect/:shortCode", URLController.REDIRECT_TO_URL);
router.get("/analytics/:shortCode", URLController.SHORT_URL_ANALYTICS);

module.exports = router;
