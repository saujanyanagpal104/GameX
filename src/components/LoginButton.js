import React from 'react';

const LoginButton = (props) => {
    const handleForm = () => {
        props.handleForm(!props.formState);
    };

    return (
        <div className="email-login-button" onClick={handleForm}>
            <span className="email-login-button-text">Login</span>
        </div>
    );
};

export default LoginButton;
