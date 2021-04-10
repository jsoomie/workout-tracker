const router = require("express").Router();

const home = require("./router");
const api = require("./api");

router.use("/", home);
router.use("/api", api);

module.exports = router;
