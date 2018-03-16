var express = require('express');
var router = express.Router();
var translate = require('google-translate-api');
var History   = require('./../models/history');
var mongoose  = require('mongoose');

router.post('/', function(req, res, next) {
    translate(req.body.text , { to: req.body.to }).then(tres => {
        console.log(tres);
        res.status(200).json({
            text: tres.text
        });
    }).catch(err => {
        console.error(err);
    });
});

router.get('/', function(req, res, next) {
    res.send('It works too, bro.');
});

module.exports = router;
