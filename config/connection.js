const mongoose = require("mongoose");

const host = "localhost";
const db_name = "workout";

mongoose.connect(`mongodb://${host}/${db_name}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose;
