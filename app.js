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

db.now("error", console.error.bind(console, "connection error:"));

// Routes
app.use(router);

app.listen(PORT, (err) => {
    if (err) {
        console.log(`ERR: ${err.stack}`);
    }
    console.log(`Listening on port ${PORT}`);
});
