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
                { expiresIn: 86400 }
            );
            res.status(200).send({ auth: true, token: token });
        }
    );
});

router.post('/login', (req, res) => {
    res.send('Login!!');
});

router.get('/logout', (req, res) => {
    res.send('Logout!!');
});

module.exports = router;
