//gameRoutes.js routes
const express = require('express');
const games = require('../models/GamesList');
const router = express.Router();
const { uuid } = require('uuidv4');


//GetAllGames Get request not working yet 404
router.get('/getAllGames', (req, res) => {
    if(games.length === 0) {
        return res.status(400).json({ confirmation: 'failed', message: 'No video Games found'});
    }
    return res.status(200).json({ confirmation: 'success', games });
    // return res.status(404).json({ confirmation: 'failed', message: 'You\'ve done something wrong' })
});


//GetSingleGame GET request not working yet 404 
router.get('/getSingleGame/:id', (req, res) => {
    const singleGame = games.filter(game => game.id === req.params.id);
    console.log(singleGame);
    console.log(req.params.id);
    if(games.length === 0) {
        return res.status(400).json({confirmation: 'failed', message: 'game not found'});
    }

    return res.status(200).json({confirmation: 'success for single game retrieve', singleGame})
    // return res.send(req.params.id);
});


//CreateGame POST request
router.post('/createGame', (req, res) => {
  if(!req.body.name 
    || !req.body.description 
    || !req.body.yearReleased 
    || !req.body.playtime ) {
        return res
                .status(400)
                .json({ confirmation: 'failed', message: 'please provide all fields of game name, description, yearReleased, playtime'})
    }

    const game = games.filter((game) => {
        return game.name === req.body.name
    });
    console.log(game);
    if(game.length > 0) {
        return res.status(404).json({ confirmation: 'fail', message: 'Video game is already in the library try another'})
    }

    let newGames = {};

    newGames.id = uuid();
    newGames.name = req.body.name;
    newGames.description = req.body.description;
    newGames.yearReleased = req.body.yearReleased;
    newGames.playtime = req.body.playtime;

    games.push(newGames);
    console.log(games);
    return res.status(200).json({ message: 'game inputted into database', games});
})

//update Game

router.put('/updateGame/:id', (req, res) => {
    let game = games.filter((game) => game.id === req.params.id);
    let updatedGame = req.body;

    if(game.length > 0) {
        return res.status(404).json({confirmation: 'failed', message: 'game not found'})
    }


        games.forEach((game) => {
            if(game.id === req.params.id) {
                game.name === updatedGame.name ? updatedGame.name : game.name;
                game.description === updatedGame.description ? updatedGame.description : game.description;
                game.yearReleased === updatedGame.yearReleased ? updatedGame.yearReleased : game.yearReleased;
                game.playtime === updatedGame.yearReleased ? updatedGame.playtime : game.playtime;
            }
        });
    

    //return res with updated games

    return res.status(200).json({message: 'Video Game Updated', games});
})


router.delete('/deleteGame/:id', (req, res) => {
    const game = games.filter(game => game.id !== req.params.id)

    return res.status(200).json({ message: 'Video Game Deleted', game})
});

module.exports = router;