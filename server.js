var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Configure express
var app = express();
var PORT = process.env.PORT || 8080;

//Access CSS files
app.use(express.static(path.join(__dirname, './app/public')));

// Parsing incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Add routes
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

// Listening on PORT
app.listen(PORT, function() {
  console.log('Friend Finder app is listening on PORT: ' + PORT);
});