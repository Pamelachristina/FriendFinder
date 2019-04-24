"use strict";

var friends = require("../data/friends.js");
var express = require("express");
var path = require("path");


var apirouter = express.Router();

apirouter.get("/survey", function (req, res) {

    console.log("GET /survey");
    res.sendFile(path.join(__dirname, "../../app/public/survey.html"));
});
apirouter.get("/", function (req, res) {

    console.log("GET /home");
    res.sendFile(path.join(__dirname, "../../app/public/home.html"));
});


module.exports = apirouter;