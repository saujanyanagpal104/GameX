const jwt = require('jsonwebtoken');
const config = require('../config');
const cookieParser = require('cookie-parser');
const express = require('express');
const router = express.Router();

router.use(cookieParser());

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token)
        return res
            .status(403)
            .send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err)
            return res.status(500).send({
                auth: false,
                message: 'Failed to authenticate token.',
            });

        req.userId = decoded.id;
        next();
    });
};

module.exports = verifyToken;
