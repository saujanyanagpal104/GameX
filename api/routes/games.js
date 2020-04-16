const express = require('express');
const router = express.Router();

router.post('/addgame', (req, res) => {
    res.send('Add game!');
});

router.put('/updategame', (req, res) => {
    res.send('Update Game');
});

router.delete('/deletegame', (req, res) => {
    res.send('Delete game!!');
});

module.exports = router;
