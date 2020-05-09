import React from 'react';

const AddGame = () => {
    return (
        <div className="add-game-form-container">
            <form encType="multipart/form-data">
                <label>
                    Upload Image:
                    <input type="file" name="image-upload" />
                </label>
                <label>
                    Game Name:
                    <input
                        type="text"
                        name="game_name"
                        placeholder="Enter Game Name"
                    />
                </label>
                <label>
                    Game Description:
                    <textarea
                        name="game_desc"
                        placeholder="Enter Game Description"
                    />
                </label>
                <button className="add-game-button">Add Game</button>
            </form>
        </div>
    );
};

export default AddGame;
