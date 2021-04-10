const router = require("express").Router();
const { Workout } = require("../models");

// API createworkout
router.post("/workouts", async (req, res) => {
    try {
        console.log("Reached /api/workouts");
        const workout = await Workout.create({});

        res.status(200).json(workout);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// API addExercise
router.put("/workouts/:id", async ({ body, params }, res) => {
    try {
        const workout = await Workout.findByIdAndUpdate(
            params.id,
            {
                $push: { exercises: body },
            },
            {
                new: true,
                runValidators: true,
            }
        );

        res.status(200).json(workout);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// API getLastWorkout
router.get("/workouts", async (req, res) => {
    try {
        const workout = await Workout.find({});

        res.status(200).json(workout);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
