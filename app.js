// Requires
var express = require('express');
var mongoose = require('mongoose');

// Init variables
var app = express();

// Connect to mongo DB
mongoose.connection.openUri('mongodb:localhost:27017/hospitalDB', (err, response) =>{

    if( err) throw err;

    onsole.log('Mongo - hospitalDB - Status: \x1b[32m%s\x1b[0m', 'online')
});

// API Routes
app.get('/', (req,res, next) =>{
    res.status(200).json({
        ok: true,
        message: 'Correcto'
    });
});

// Listeners of all petitions - port:3000
app.listen(3000, () => {
    console.log('Express running in port 3000 - Status: \x1b[32m%s\x1b[0m', 'online')
});