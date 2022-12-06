"use strict";
const Emotions = require('./model');
const { json } = require('express');
const {AppError} = require('../../utils/appError');

module.exports.getsingleResearch = async (req, res, next)=>{
        try{
            const filtered = await Emotions.find(
                { },
                { longitude: 1, latitude: 1 , emotion:1, _id: 0 }
            );
            console.log(filtered)
            if(!filtered) return new AppError("no data found", 407)
            
            json(filtered);
            res.render('index', {name: filtered});
        }
        catch(err){
            next(err)
        }
};
module.exports.getAllResearchs = async (req, res, next)=>{
    try{
        let filtered = await Emotions.find().catch(err=>console.log(err));

        if(!filtered) return new AppError("no data found", 407)
        
        json(filtered);
        res.render('index', {name: filtered});
    }
    catch(err){
        next(err)
    }
};