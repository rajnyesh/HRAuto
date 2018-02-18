console.log('HR Autoamtion js started executing')

var mysql = require('mysql');
var con = mysql.createConnection({
  host     : 'hr.c9i7tssig8rc.us-east-1.rds.amazonaws.com',
  user     : 'rajrudra',
  password : 'rajrudra'
});

con.connect(function(err) {
  if (err) throw err;
  console.log('Connected to DB.');
});