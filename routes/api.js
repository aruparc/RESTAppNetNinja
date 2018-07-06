const express = require('express');
const router = express.Router();
const Tech = require('../models/technology');


// Get a list of technologies from the db
router.get('/techs', function(req,res,next){

    Tech.find({category:req.query.category,subcategory:req.query.subcategory}).then(function(techs){
        res.send(techs);
    });

    console.log('GET');
});

// Post a new tool to the db
router.post('/techs', function(req,res,next){
    console.log(req.body);

    Tech.create(req.body).then(function(tech){
        res.send(tech);
    }).catch(next);                  

    console.log('POST');
});

// Put (or update) a tool in the db
router.put('/techs/:id', function(req,res,next){
    Tech.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
        Tech.findOne({_id:req.params.id}).then(function(tech){
            res.send(tech);
        });
    });
    
    console.log('PUT');
});

// Delete a tool from the db
router.delete('/techs/:id', function(req,res,next){
    Tech.findByIdAndRemove({_id:req.params.id}).then(function(tech){
        res.send(tech);
    });

    console.log('DELETE');
});

module.exports = router;