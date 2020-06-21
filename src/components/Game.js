import React from 'react';
import { imageUrl } from '../helpers/imageUrl';

const Game = ({ games }) => {
    return (
        <div className="games-container">
            {games &&
                games.map((game, index) => (
                    <div className="game-container" key={index}>
                        <div className="game-info">
                            <div className="game-image-container">
                                <img
                                    src={imageUrl(game.game_poster)}
                                    alt={`${game.game_name}-poster`}
                                />
                            </div>
                            <div className="game-details-container">
                                <span className="game-name">
                                    {game.game_name}
                                </span>
                                <span className="game-desc">
                                    {game.game_desc}
                                </span>
                            </div>
                        </div>
                        <div className="user-details-container">
                            <span className="user-name">
                                {game.postedBy.full_name}
                            </span>
                            <span className="user-email">
                                {game.postedBy.email}
                            </span>
                            <span className="user-mobile">
                                {game.postedBy.mobile_number}
                            </span>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default Game;
