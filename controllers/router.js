const router = require("express").Router();

router.get("/", (req, res) => {
    res.render("index", {
        title: "Fitness Pal",
    });
});

router.get("/exercise", (req, res) => {
    res.render("exercise", {
        title: "Exercises!",
    });
});

router.get("/stats", (req, res) => {
    res.render("stats", {
        title: "Your stats!",
    });
});

module.exports = router;
