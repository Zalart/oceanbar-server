const router = require("express").Router();
const menuController = require("./menuController");

router.route("/").get(menuController.getAll);

module.exports = router;
