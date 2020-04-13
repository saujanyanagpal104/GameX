import React, { useState } from 'react';
import LoginButton from '../components/LoginButton';
import SignUpButton from '../components/SignUpButton';
import AboutApp from '../components/AboutApp';
import LoginWithGoogleButton from '../components/LoginWithGoogleButton';
import SignUpForm from '../components/SignUpForm';
import LoginForm from '../components/LoginForm';

const LandingPage = () => {
    const [signUpModal, toggleSignUpModal] = useState(false);
    const [loginModal, toggleLoginModal] = useState(false);

    return (
        <div className="wrapper">
            <div className="landing-page">
                <div className="app-intro">
                    <AboutApp />
                </div>
                <div className="auth-buttons">
                    <LoginButton
                        formState={loginModal}
                        handleForm={toggleLoginModal}
                    />
                    <SignUpButton
                        formState={signUpModal}
                        handleForm={toggleSignUpModal}
                    />
                    <LoginWithGoogleButton />
                    {signUpModal ? (
                        <SignUpForm
                            formState={signUpModal}
                            handleForm={toggleSignUpModal}
                        />
                    ) : null}
                    {loginModal ? (
                        <LoginForm
                            formState={loginModal}
                            handleForm={toggleLoginModal}
                        />
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
