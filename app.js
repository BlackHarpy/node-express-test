
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var methodOverride  = require("method-override");
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/baldurs_gate', function(err, res) {
  if(err) throw err;
  console.log('Connected to Database');
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

require('./src/server/models/schemas/armor')
require('./src/server/models/schemas/weapon')
require('./src/server/routes')(app);

app.listen(9000, function() {
  console.log("Node server running on http://localhost:9000");
});
