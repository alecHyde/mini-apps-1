var express = require('express');
var app = express();

app.use(express.static('client'));
app.listen(3000);


var createCSVReport = function(json) {
  // first parse back to an object
  var obj = JSON.parse(json);
  var CSVReport = ``;
  var keys = Object.keys(obj);
  // remove children attribute from keys
  var child = keys.pop();
  // add keys to CSV report
  for (var i = 0; i < keys.length; i++) {
    CSVReport += keys[i]; 
    CSVReport += ',';
  }
  // add linebreak to CSV report 
  CSVReport += '\n';
  // recursively iterate through obj to add values to CSV report
  var recurse = function (object) {
    // base case: add values to CSV report and add linebreak at the end
    for (var i = 0; i < keys.length; i++) {
      CSVReport += object[keys[i]]; 
      CSVReport += ',';
    }
    CSVReport += '\n';
    // recursive case: check to see if children are present, if so, call recurse on children
    if (object[child].length > 0) {
      for (var j = 0; j < object[child].length; j++) {  
        recurse(object[child][j]);
      }
    }
  }
  recurse(obj);
}


