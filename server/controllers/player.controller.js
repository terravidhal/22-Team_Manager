const Player = require('../models/player.model');
 


module.exports.findAllPlayers = (req, res) => {
    Player.find()
        .sort({ name: 1 }) 
        .then((allDaPlayers) => {
            res.json(allDaPlayers)
        })
        .catch((err) => {
             res.status(400).json(err) 
        });
}


 
module.exports.findOneSinglePlayer = (req, res) => {
    Player.findOne({ _id: req.params.id })
        .then(oneSinglePlayer => {
            res.json(oneSinglePlayer)
        })
        .catch((err) => {
             res.status(400).json(err) 
        });}
 

module.exports.createNewPlayer = (req, res) => {
    Player.create(req.body)
        .then(newlyCreatedPlayer => {
            res.json(newlyCreatedPlayer)
        })
        .catch((err) => {
            res.status(400).json(err) 
        });}
 

module.exports.updateExistingPlayer = (req, res) => {
    Player.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedPlayer => {
            res.json(updatedPlayer)
        })
        .catch((err) => {
             res.status(400).json(err) 
        });}
 
        
module.exports.deleteAnExistingPlayer = (req, res) => {
    Player.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json(result)
        })
        .catch((err) => {
             res.status(400).json(err) 
        });}


    