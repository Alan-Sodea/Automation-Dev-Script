const mongoose = require("mongoose");

module.exports = mongoose.model("Users", {
    name : String,
    password : String,
})