const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
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
            if (err)
                return res.status(200).send({ message: 'Registration Error!' });
            else {
                const token = jwt.sign(
                    { id: user._id, email: user.email },
                    process.env.SECRET,
                    { expiresIn: '2 days' }
                );
                res.set({ Authorization: `Bearer ${token}` });
                res.status(200).send({ auth: true, token: token });
            }
        }
    );
});

router.post('/login', (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (err)
            res.status(200).send({ auth: false, message: 'Server Error!' });
        if (!user)
            res.status(200).send({ auth: false, message: 'User not found!' });
        else {
            const passwordValid = bcrypt.compareSync(
                req.body.password,
                user.password
            );
            if (!passwordValid) {
                res.status(200).send({ auth: false });
            } else {
                const token = jwt.sign(
                    { id: user._id, email: user.email },
                    process.env.SECRET,
                    { expiresIn: '2 days' }
                );
                res.status(200).send({ auth: true, token: token });
            }
        }
    });
});

router.get('/logout', (req, res) => {
    res.send({ auth: false });
});

module.exports = router;
