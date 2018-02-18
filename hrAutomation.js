console.log('HR Autoamtion js started executing');
var express = require('express');
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
console.log('Launching HR Automation Home page.');
app.get('', function(req, res){
	res.sendFile('D:/eclipse_workspace/HRAuto/WebContent/html/home.html');
});

app.get('/feedbackEntry', function(req, res){
	res.sendFile('D:/eclipse_workspace/HRAuto/WebContent/html/feedbackEntry.html');
});

app.get('/feedbackReport', function(req, res){
	res.sendFile('D:/eclipse_workspace/HRAuto/WebContent/html/feedbackReport.html');
});

app.listen('3000', function(){
	console.log('App is listening at port 3000...');
});

var mysql = require('mysql');
var con = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'hrautomation'
});

con.connect(function(err) {
  if (err) throw err;
  console.log('Connected to DB.');
});

app.post('/feedbackEntry', function (req, res){
	var course_record = {
		psa_id  	: req.body.psa_id,
		name		: req.body.name,
		training_id	: null,
		from_date	: req.body.fromDate,
		to_date 	: req.body.toDate 
	}
	
	var training_record = {
		training_id		: null,
		course_name		: req.body.courseName,
		trainer_name	: req.body.trainerName,
		feedback_id		: null,
	}
	
	var feedback_record = {
		feedback_id		: null,
		question_id		: q1;
		rating			: req.body.rating_1;
	}
	var query = con.query('INSERT INTO course SET ?', course_record, function(err, result){
		if (err) throw err;
		console.log('Record inserted in to Course table successfully.');
		res.send('Record inserted in to Course table successfully.');
	});
	var query = con.query('INSERT INTO training SET ?', training_record, function(err, result){
		if (err) throw err;
		console.log('Record inserted in to Traiing table successfully.');
		res.send('Record inserted in to Training table successfully.');
	});
	var query = con.query('INSERT INTO feedback SET ?', feedback_record, function(err, result){
		if (err) throw err;
		console.log('Record inserted in to feedback table successfully.');
		res.send('Record inserted in to feedback table successfully.');
	});
});