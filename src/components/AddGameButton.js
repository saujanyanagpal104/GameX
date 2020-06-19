import React from 'react';

const AddGameForm = (props) => {
    const handleForm = () => {
        props.handleForm(true);
    };

    return (
        <div className="add-game-button" onClick={handleForm}>
            <span className="add-game-button-text">Add Game</span>
        </div>
    );
};

export default AddGameForm;
