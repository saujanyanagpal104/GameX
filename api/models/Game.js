const mongoose = require('mongoose');

const gameSchema = mongoose.Schema({
    image: {
        data: Buffer,
        contentType: String,
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
