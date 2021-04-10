const router = require("express").Router();

const home = require("./router");
const api = require("./api");

router.use("/", home);
router.use("/api/workouts", api);

module.exports = router;
