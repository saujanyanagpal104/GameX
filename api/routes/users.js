const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
    res.send('users');
});

router.post('/register', (req, res) => {
    res.send('Registerd!!');
});

module.exports = router;
