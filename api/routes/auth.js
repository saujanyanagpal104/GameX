const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');
const User = require('../models/User');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.post('/register', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    const hashedPassword = bcrypt.hashSync(req.body.password, 8);

    User.create(
        {
            full_name: req.body.full_name,
            email: req.body.email,
            mobile_number: req.body.mobile_number,
            password: hashedPassword,
        },
        (err, user) => {
            if (err) return res.status(500).send('Registration Error!');
            const token = jwt.sign(
                { id: user._id, email: user.email },
                config.secret,
                { expiresIn: '30 days' }
            );
            res.cookie('access-token', token, {
                expires: new Date(Date.now() + 30 * 24 * 3600000),
                httpOnly: true,
            });
            res.status(200).send({ auth: true });
        }
    );
});

router.post('/login', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    User.findOne({ email: req.body.email }, (err, user) => {
        if (err) res.status(500).send('Server Error!');
        if (!user) res.status(400).send('User not found');

        const passwordValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );
        if (!passwordValid) {
            res.status(401).send({ auth: false });
        }

        const token = jwt.sign(
            { id: user._id, email: user.email },
            config.secret,
            { expiresIn: '30 days' }
        );
        res.cookie('access-token', token, {
            expires: new Date(Date.now() + 30 * 24 * 3600000),
            httpOnly: true,
        });
        res.status(200).send({ auth: true });
    });
});

router.get('/logout', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.send({ auth: false });
});

module.exports = router;
