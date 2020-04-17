const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const verifyToken = require('../middlewares/verifyToken');
const bodyParser = require('body-parser');
const Game = require('../models/Game');

router.get('/games', (req, res) => {
    res.send('games');
});

router.post('/addgame', verifyToken, (req, res) => {});

router.put('/updategame', verifyToken, (req, res) => {
    res.send('Update Game');
});

router.delete('/deletegame', verifyToken, (req, res) => {
    res.send('Delete game!!');
});

module.exports = router;
