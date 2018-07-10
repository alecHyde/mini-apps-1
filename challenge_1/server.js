//npm install
//npm init;
//npm install express;


// require express
// look at docs

// node server.js

var express = require('express');
var app = express()

app.use(express.static('app'));

app.listen(3000)