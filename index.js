const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Set up express app
const app = express();

// Connect to mongodb
mongoose.connect('mongodb://localhost/allianztech');
mongoose.Promise = global.Promise;

// Parses data into JSON
app.use(bodyParser.json());

// Initialize API routes
app.use('/api', routes);

// Initialize error handling middleware
app.use(function(err,req,res,next){
    console.log(err);
    res.status(422).send({error: err.message});
});

// Listen for requests -- it will either listen for process.env.port (ie. heroku, any other hosting port) or for a localhost port
app.listen(process.env.port || 4000, function(){
    console.log('now listening for requests');
});