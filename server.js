console.log('HR Autoamtion js started executing');
var express = require('express');
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
console.log('Launching HR Automation Home page.');
app.get('', function(req, res){
	res.sendFile('Hello World!!');
});

/*console.log('HR Autoamtion js started executing')

var mysql = require('mysql');
var con = mysql.createConnection({
  host     : 'hr.c9i7tssig8rc.us-east-1.rds.amazonaws.com',
  user     : 'rajrudra',
  password : 'rajrudra'
});

con.connect(function(err) {
  if (err) throw err;
  console.log('Connected to DB.');
});*/
