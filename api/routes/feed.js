const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const User = require('../models/User');
const Game = require('../models/Game');
const verifyToken = require('../middlewares/verifyToken');

router.use(cookieParser());

router.get('/feed', (req, res) => {
    console.log(req.cookies, 'cook');
    // To FIX
    // User.findById(req.userId, { password: 0 }, (err, user) => {
    //     if (err)
    //         return res.status(500).send('There is a problem finding the user.');
    //     if (!user) return res.status(404).send('No user found.');

    Game.find({}, (err, games) => {
        if (err) return res.status(500).send('Error!!');
        res.status(200).send({ auth: true, games: games });
    });
    // });
});

module.exports = router;
