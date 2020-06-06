// Requires
var express = require('express');
var mongoose = require('mongoose');
var app = express();

// API Routes
app.get('/', (req,res, next) =>{
    res.status(200).json({
        ok: true,
        message: 'Server is running'
    });
});


module.exports = app;