import React from 'react';

const SignUpButton = (props) => {
    const handleClick = () => {
        props.handleState('true');
    };

    return (
        <div className="email-signup-button" onClick={handleClick}>
            <span className="email-signup-button-text">SignUp</span>
        </div>
    );
};

export default SignUpButton;
