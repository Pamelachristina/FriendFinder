"use strict";

// DEPENDENCIES
var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var apiRoutes = require("./app/routing/apiRoutes.js");
var htmlRoutes = require("./app/routing/htmlRoutes.js");

// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);



// LISTENER
// The below code effectively "starts" our server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });