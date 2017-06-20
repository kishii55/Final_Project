var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var Champion = require('./db/championModel.js');
const championHelpers = require('./db/championHelpers');

var port = process.env.PORT || 3000;
var app = express();

// Connect to mongoose database hosted by mlab
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/league');

// Logging middleware
app.use(morgan('dev'));
// Parse req.body
app.use(bodyParser.json());

// Serve static assets
app.use(express.static(__dirname + '/../public'));

// Routes
app.get('/champions', function(req, res) {
  championHelpers.getChampions(req, res);
});

app.post('/champions', function(req, res) {
  championHelpers.addChampion(req, res);
});

// Adds note to specific champion in champion card
app.post('/addnote', function(req, res) {
  championHelpers.addNoteToChampion(req, res);
});

app.delete('/deletenote', function(req, res) {
  championHelpers.deleteNoteFromChampion(req, res);
});

app.delete('/deletechampion/:id', function(req, res) {
  championHelpers.deleteChampion(req, res);
});

// Server listening
app.listen(port, function() {
  console.log('Express server listening at port: ' + port);
});
