console.log('HR Autoamtion js started executing');
var express = require('express');
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
console.log('Launching HR Automation Home page.');
app.get('', function(req, res){
	res.sendFile('D:/GIT/HRAutomation/WebContent/html/home.html');
});

app.get('/feedbackEntry', function(req, res){
	res.sendFile('D:/GIT/HRAutomation/WebContent/html/feedbackEntry.html');
});

app.get('/feedbackReport', function(req, res){
	res.sendFile('D:/GIT/HRAutomation/WebContent/html/feedbackReport.html');
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
	/*var course_record = {
		psa_id  	: req.body.psa_id,
		name		: req.body.name,
		training_id	: null,
		from_date	: req.body.fromDate,
		to_date 	: req.body.toDate 
	}
	var query = con.query('INSERT INTO course SET ?', course_record, function(err, result){
		if (err) throw err;
		console.log('Record inserted in to Course table successfully.');
		res.send('Record inserted in to Course table successfully.');
	});
	var training_record = {
		training_id		: null,
		course_name		: req.body.courseName,
		trainer_name	: req.body.trainerName,
		feedback_id		: null,
	}
	var query = con.query('INSERT INTO training SET ?', training_record, function(err, result){
		if (err) throw err;
		console.log('Record inserted in to Traiing table successfully.');
		res.send('Record inserted in to Training table successfully.');
	});
	*/
	var feedback_record = {
		feedback_id		: req.body.psa_id,
		question_id		: 'q1',
		rating			: req.body.q1
	}
	insertFeedback(feedback_record);
	feedback_record = {
		feedback_id		: req.body.psa_id,
		question_id		: 'q2',
		rating			: req.body.q2
	}
	insertFeedback(feedback_record);
	feedback_record = {
		feedback_id		: req.body.psa_id,
		question_id		: 'q3',
		rating			: req.body.q3
	}
	insertFeedback(feedback_record);
	feedback_record = {
		feedback_id		: req.body.psa_id,
		question_id		: 'q4',
		rating			: req.body.q4
	}
	insertFeedback(feedback_record);
	var feedback_record = {
		feedback_id		: req.body.psa_id,
		question_id		: 'q5',
		rating			: req.body.q5
	}
	insertFeedback(feedback_record);
	res.send('Record inserted in to feedback table successfully.');
});

function insertFeedback(feedback_record){
	var query = con.query('INSERT INTO feedback SET ?', feedback_record, function(err, result){
		if (err) throw err;
		console.log('Record inserted in to feedback table successfully.');
	});
}