const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./Models/user");
const bodyParser = require("body-parser");

app.set("views", "./Templates");
app.set("view engine", "ejs");

app.use(express.static("./Static"))
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) =>
{
    res.status(200).render("index");
});

app.listen(8000);
console.log("Waiting on port 8000");