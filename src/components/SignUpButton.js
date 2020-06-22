import React from 'react';

const SignUpButton = (props) => {
    const handleForm = () => {
        props.handleForm(true);
    };

    return (
        <div className="email-signup-button" onClick={handleForm}>
            <span className="email-signup-button-text">SIGNUP</span>
        </div>
    );
};

export default SignUpButton;
