import React, { useState } from 'react';

const AddGameForm = (props) => {
    const [formData, setFormData] = useState({});

    const closeForm = () => {
        props.handleForm(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData, 'testyyy');
        props.addGame(formData);
    };

    const handleChange = (e) => {
        let data = new FormData();
        let image = e.target.files ? e.target.files[0] : null;
        data.append('image', image);
        console.log(data, 'datat');
        setFormData(data);
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
                            onChange={handleChange}
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
