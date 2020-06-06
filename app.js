// Requires
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Init variables
var app = express();

// Body Parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Import routes
var appRoutes = require('./routes/app');
var userRoutes = require('./routes/user');

// Connect to mongo DB
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, response) =>{

    if( err) throw err;

    console.log('Mongo - hospitalDB - Status: \x1b[32m%s\x1b[0m', 'online')
});


// Routes
app.use('/user', userRoutes);
app.use('/', appRoutes);


// Listeners of all petitions - port:3000
app.listen(3000, () => {
    console.log('Express running in port 3000 - Status: \x1b[32m%s\x1b[0m', 'online')
});