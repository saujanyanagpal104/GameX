const express = require('express');
const router = express.Router();

router.get('/feed', (req, res) => {
    res.send('feed!!');
});

module.exports = router;
