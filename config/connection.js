const mongoose = require("mongoose");

const host = "localhost";
const db_name = "workout";
const mongo = process.env.MONGODB_URI;

mongoose.connect(mongo || `mongodb://${host}/${db_name}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

module.exports = mongoose;
