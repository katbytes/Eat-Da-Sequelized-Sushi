// Node Dependencies
var express = require("express");
var router = express.Router();
var sushi = require("../models/sushi.js");

// Extracts the sequelize connection from the models object
var sequelizeConnection = models.sequelize;

// Sync tables
sequelizeConnection.sync();

// Create routes ----------------------------------------------------

router.get("/", function(req, res) {
  res.redirect("/sushis");
});

router.get("/sushis", function(req, res) {
  sushi.all(function(sushiData) {
    res.render("index", { sushi_data: sushiData });
  });
});

router.post("/sushis/create", function(req, res) {
  sushi.create(req.body.sushi_name, function(result) {
    console.log(result);
    res.redirect("/");
  });
});

router.put("/sushis/:id", function(req, res) {
  sushi.update(req.params.id, function(result) {
    console.log(result);
    res.sendStatus(200);
  });
});

// Export routes ----------------------------------------------------
module.exports = router;