const express = require("express");
const app = express();
const logger = require("morgan");
const compression = require("compression");
const hbs = require("express-handlebars");
const router = require("./controllers");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;

app.set("view engine", "hbs");
app.engine(
    "hbs",
    hbs({
        extname: "hbs",
        defaultLayout: "main",
    })
);

// Middleware
app.use(compression());
app.use(logger("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

// Routes
app.use(router);

app.listen(PORT, (err) => {
    if (err) {
        console.log(`ERR: ${err.stack}`);
    }
    console.log(`Listening on port ${PORT}`);
});
