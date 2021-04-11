const router = require("express").Router();
const { Workout } = require("../models");

// API createworkout
router.post("/", async (req, res) => {
    try {
        console.log("Reached /api");
        const workout = await Workout.create({});

        res.status(200).json(workout);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// API addExercise
router.put("/:id", async ({ body, params }, res) => {
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
router.get("/", async (req, res) => {
    try {
        // const workout = await Workout.find({});
        const workout = await Workout.aggregate([
            {
                $addFields: {
                    totalDuration: {
                        $sum: "$exercises.duration",
                    },
                },
            },
        ]);

        res.status(200).json(workout);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// API getWorkoutsInRange
router.get("/range", async (req, res) => {
    try {
        // const workout = await Workout.find({});

        const workout = await Workout.aggregate([
            {
                $addFields: {
                    totalDuration: {
                        $sum: "$exercises.duration",
                    },
                },
            },
        ]);

        res.status(200).json(workout);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
