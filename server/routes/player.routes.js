const PlayerController = require('../controllers/player.controller');
 
module.exports = app => {
    app.get('/api/player', PlayerController.findAllPlayers);  
    app.get('/api/player/:id', PlayerController.findOneSinglePlayer);
    app.patch('/api/player/:id', PlayerController.updateExistingPlayer); 
    app.post('/api/player', PlayerController.createNewPlayer);
    app.delete('/api/player/:id', PlayerController.deleteAnExistingPlayer);
}

