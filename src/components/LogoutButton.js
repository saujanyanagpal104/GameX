import React from 'react';

const LogoutButton = (props) => {
    const handleForm = () => {
        props.handleForm(true);
    };

    return (
        <div className="logout-button" onClick={handleForm}>
            <span className="logout-button-text">Logout</span>
        </div>
    );
};

export default LogoutButton;
