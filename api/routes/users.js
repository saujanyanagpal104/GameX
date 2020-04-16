const express = require('express');
const router = express.Router();
const User = require('../models/User');
const cookieParser = require('cookie-parser');
const verifyToken = require('../middlewares/verifyToken');

router.use(cookieParser());

router.get('/users', (req, res) => {
    User.find({}, (err, users) => {
        if (err) return res.status(500).send('Error!!');
        res.send({ users: users });
    });
});

router.get('/profile', verifyToken, (req, res) => {
    User.findById(req.userId, { password: 0 }, (err, user) => {
        if (err)
            return res.status(500).send('There is a problem finding the user.');
        if (!user) return res.status(404).send('No user found.');

        res.status(200).send(user);
    });
});

module.exports = router;
