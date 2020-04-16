const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const User = require('../models/User');
const verifyToken = require('../middlewares/verifyToken');

router.use(cookieParser());

router.get('/feed', verifyToken, (req, res) => {
    console.log(req.cookies, 'cook');
    console.log(req.cookies['access-token'], 'token');
    User.findById(req.userId, { password: 0 }, (err, user) => {
        if (err)
            return res.status(500).send('There is a problem finding the user.');
        if (!user) return res.status(404).send('No user found.');

        res.status(200).send(user);
    });
});

module.exports = router;
