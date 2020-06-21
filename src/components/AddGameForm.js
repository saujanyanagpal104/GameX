import React, { useState, useEffect } from 'react';

const AddGameForm = (props) => {
    const [formData, setFormData] = useState({});
    const [game_poster, setGamePoster] = useState(null);
    const [validateForm, setValidation] = useState(false);
    const [isLoaded, setLoaded] = useState(false);

    const closeForm = () => {
        props.handleForm(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.game_name && formData.game_desc && game_poster != null) {
            setValidation(false);
            setLoaded(true);
            await props.addGame(game_poster, formData);
            await props.fetchFeed();
            props.handleForm(false);
        } else {
            setValidation(true);
        }
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
                            value={formData.game_name || ''}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        Game Description:
                        <textarea
                            name="game_desc"
                            placeholder="Enter Game Description"
                            value={formData.game_desc || ''}
                            onChange={handleChange}
                        />
                    </label>

                    <button className="add-game-button" onClick={handleSubmit}>
                        <span className="add-game-button-text">
                            {isLoaded ? 'Wait!! Adding...' : 'Add Game'}
                        </span>
                    </button>
                </form>
                {validateForm && (
                    <span className="validation-error">
                        Cannot leave any field empty!!
                    </span>
                )}
            </div>
        </div>
    );
};

export default AddGameForm;
