import React, { useState, useEffect } from 'react';

const AddGameForm = (props) => {
    const [formData, setFormData] = useState({});
    const [game_poster, setGamePoster] = useState(null);

    const closeForm = () => {
        props.handleForm(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addGame(game_poster, formData);
        props.handleForm(false);
    };

    const addImage = (e) => {
        e.preventDefault();
        setGamePoster(e.target.files[0]);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="add-game-form-container">
            <div className="form-window">
                <h2>Add Game</h2>
                <div className="close-button" onClick={closeForm}>
                    CLOSE<span className="close-sign">(X)</span>
                </div>
                <form
                    encType="multipart/form-data"
                    method="POST"
                    action="http://localhost:4000/api/addgame"
                >
                    <label>
                        Upload Image:
                        <input
                            type="file"
                            name="game_poster"
                            placeholder="Add Game Image"
                            onChange={addImage}
                        />
                    </label>
                    <label>
                        Game Name:
                        <input
                            type="text"
                            name="game_name"
                            placeholder="Enter Game Name"
                            value={formData.game_name}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Game Description:
                        <textarea
                            name="game_desc"
                            placeholder="Enter Game Description"
                            value={formData.game_desc}
                            onChange={handleChange}
                        />
                    </label>
                    <button className="add-game-button" onClick={handleSubmit}>
                        <span className="add-game-button-text">Add Game</span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddGameForm;
