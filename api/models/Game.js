const mongoose = require('mongoose');

const gameSchema = mongoose.Schema({
    game_poster: {
        type: String,
        required: true,
    },
    game_name: {
        type: String,
        required: true,
    },
    game_desc: {
        type: String,
        required: true,
    },
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
