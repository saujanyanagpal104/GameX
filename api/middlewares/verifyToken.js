const jwt = require('jsonwebtoken');
const config = require('../config');
const cookieParser = require('cookie-parser');
const express = require('express');
const router = express.Router();

router.use(cookieParser());

const verifyToken = (req, res, next) => {
    console.log(req.cookies, 'cookies');
    const token = req.cookies['access-token'];
    console.log('123123', token);
    if (!token)
        return res
            .status(403)
            .send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err)
            return res.status(500).send({
                auth: false,
                message: 'Failed to authenticate token.',
            });

        req.userId = decoded.id;
        console.log(req.userId, 'userrr123');
        next();
    });
};

module.exports = verifyToken;
