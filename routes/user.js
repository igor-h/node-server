var express = require('express');

var app = express();

var User = require('../models/user');


// Get users
app.get('/', (req,res, next) =>{

    User.find({}, 'name email img role')
    .exec( (err, users) => {

        if(err){
            return res.status(500).json({
                ok: false,
                message: 'Error get users',
                errors: err
            });
        }

        res.status(200).json({
            ok: true,
            data: users
        });
    })

});


// Post new user
app.post('/', (req,res) => {

    var body = req.body;
    var user = new User({
        name: body.name,
        email:  body.email,
        password: body.password,
        img: body.img,
        role: body.role 
    });
    
    res.status(200).json({
        ok:true,
        data: body
    })

});

module.exports = app;