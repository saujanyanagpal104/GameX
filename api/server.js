const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');

const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const feedRoutes = require('./routes/feed');
const gamesRoutes = require('./routes/games');

// Connect to Database
mongoose
    .connect(
        `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds061767.mlab.com:61767/gamex`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        },
        () => {
            console.log('Database Connected!');
        }
    )
    .catch((err) => console.log(err));

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('API Working!!');
});
app.use('/api', userRoutes);
app.use('/api', authRoutes);
app.use('/api', feedRoutes);
app.use('/api', gamesRoutes);

app.listen(port, () => {
    console.log(`Server is running at`, port);
});
