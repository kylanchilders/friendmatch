// Dependencies
// =============================================================
var apiRoutes = require('express').Router();
var friendsArray = require("../data/friends.js");

apiRoutes.get("/friends", function(req, res) {
    return res.json(friendsArray);
});

apiRoutes.post("/friends", function(req, res){
    var newFriend = req.body;
    friendsArray.push(newFriend);
    res.json(newFriend);
});

module.exports = apiRoutes;