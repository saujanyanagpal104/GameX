import React from 'react';
import { imageUrl } from '../helpers/imageUrl';

const Game = ({ games }) => {
    console.log(games, 'props');
    return (
        <div className="games-container">
            {games &&
                games.map((game, index) => (
                    <div className="game-container" key={index}>
                        <div className="game-image-container">
                            <img
                                src={imageUrl(game.game_poster)}
                                alt={`${game.game_name}-poster`}
                            />
                        </div>
                        <div className="game-details-container">
                            <span className="game-name">{game.game_name}</span>
                            <span className="game-desc">{game.game_desc}</span>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default Game;