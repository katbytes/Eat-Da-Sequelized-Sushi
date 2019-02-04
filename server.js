// Node Dependencies
var express = require("express");
var db = require("./models");

var PORT = process.env.PORT || 8000;

// Set up Express
var app = express();

// Serve static content for the app from the "public" dir in the app dir
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
var routes = require("./controllers/sushiController.js");

app.use(routes);

// Open Server
db.sequelize.sync().then(function(){
  app.listen(PORT, function() {
    console.log("Listening on port:%s", PORT);
  });
});
