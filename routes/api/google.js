const router = require("express").Router();
const googleController = require("../../controllers/googleController.js");

router.route("/").get(googleController.findAll);

module.exports = router;
