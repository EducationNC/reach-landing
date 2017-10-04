
var express = require('express');
var app = express();
var ejs = require('ejs');

app.use(express.static(__dirname + '/public'))

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), function(){
  console.log('Node app is running on port', app.get('port'));
});

var creds = require('<client key JSON file>');

var GoogleSpreadsheet = require("google-sheets-node-api");

var mySheet = new GoogleSpreadsheet('<spreadsheet ID>');

app.get('/', function(req, res){
  res.render('index')
});
