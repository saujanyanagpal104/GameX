import React from 'react';

const SignUpButton = (props) => {
    const handleForm = () => {
        props.handleForm(!props.formState);
    };

    return (
        <div className="email-signup-button" onClick={handleForm}>
            <span className="email-signup-button-text">SignUp</span>
        </div>
    );
};

export default SignUpButton;
