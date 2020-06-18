const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');
const User = require('../models/User');
const cookieParser = require('cookie-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
router.use(cookieParser());

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
                process.env.SECRET,
                { expiresIn: '30 min' }
            );
            res.set({ Authorization: `Bearer ${token}` });
            res.status(200).send({ auth: true, token: token });
        }
    );
});

router.post('/login', (req, res) => {
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
            process.env.SECRET,
            { expiresIn: '30 days' }
        );
        res.status(200).send({ auth: true, token: token });
    });
});

router.get('/logout', (req, res) => {
    res.send({ auth: false });
});

module.exports = router;
