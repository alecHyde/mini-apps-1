var express = require('express');
var bodyParser = require('body-parser');

var app = express();
// folder to serve... put index.html and compiled js here
app.use(express.static('public'));
app.listen(3000);

// body parser middleware will chunk and parse data coming in from ajax request and put in in req.body
app.use(bodyParser.json())


