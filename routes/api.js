const express = require('express');
const router = express.Router();
const Tech = require('../models/technology');


// Get a list of technologies from the db
router.get('/techs', function(req,res,next){
    res.send({type:'GET'});
});

// Post a new tool to the db
router.post('/techs', function(req,res,next){
    console.log(req.body);

    Tech.create(req.body).then(function(tech){
        res.send(tech);
    }).catch(next);                  

});

// Put (or update) a tool in the db
router.put('/techs/:id', function(req,res,next){
    res.send({type:'PUT'});
});

// Delete a tool from the db
router.delete('/techs/:id', function(req,res,next){
    res.send({type:'DELETE'});
});

module.exports = router;