// Dependencies
// =============================================================
var htmlRoutes = require('express').Router();
var path = require("path");

htmlRoutes.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "..", "/public", "home.html"));
});

htmlRoutes.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "..", "/public","survey.html"));
});

module.exports = htmlRoutes;