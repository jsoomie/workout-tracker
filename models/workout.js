const { Schema, model } = require("mongoose");

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date(),
    },
    exercises: [
        {
            // resistance or cardio etc...
            type: {
                type: String,
                required: "Need the type of exercise!",
            },
            name: {
                type: String,
                required: "Need the name of the exercise!",
            },
            duration: {
                type: Number,
                required: "Need the duration of the exercise!",
            },
            weight: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            //for running
            distance: {
                type: Number,
            },
        },
    ],
});

const Workout = model("Workout", workoutSchema);

module.exports = Workout;
