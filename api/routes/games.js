const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const verifyToken = require('../middlewares/verifyToken');

router.post('/addgame', verifyToken, (req, res) => {
    res.send('Add game!');
});

router.put('/updategame', verifyToken, (req, res) => {
    res.send('Update Game');
});

router.delete('/deletegame', verifyToken, (req, res) => {
    res.send('Delete game!!');
});

module.exports = router;
