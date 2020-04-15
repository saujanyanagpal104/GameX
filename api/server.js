const express = require('express');

const app = express();
const port = process.env.PORT || 6000;

app.listen(port, (req, res) => {
    console.log(`Server is running at`, port);
});
