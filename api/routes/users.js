const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
    res.send('users');
});

router.get('/profile', (req, res) => {
    res.send('Profile!!');
});

module.exports = router;
