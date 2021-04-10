const router = require("express").Router();
const { Workout } = require("../models");

// postman to see if things work
router.get("/workouts", async (req, res) => {
    try {
        console.log("Hello world");
        res.send("Hello World");
    } catch (err) {
        console.log(err);
        res.json(err);
    }
});

// to post a new workout
router.post("/workouts", async (req, res) => {
    try {
        console.log("Reached /api/workouts");
        const workout = await Workout.create({});

        res.status(200).json(workout);
    } catch (err) {
        console.log(err);
        res.json(err);
    }
});

module.exports = router;
