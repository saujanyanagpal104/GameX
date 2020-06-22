import React, { useState } from 'react';
import AboutApp from '../components/AboutApp';
// import LoginWithGoogleButton from '../components/LoginWithGoogleButton';
import LoginFormMain from '../containers/LoginFormMain';
import LoginButtonMain from '../containers/LoginButtonMain';
import SignUpButtonMain from '../containers/SignUpButtonMain';
import SignUpFormMain from '../containers/SignUpFormMain';

const LandingPage = (props) => {
    return (
        <div className="wrapper">
            <div className="landing-page">
                <div className="app-intro">
                    <AboutApp />
                </div>
                <div className="auth-buttons">
                    <LoginButtonMain />
                    <SignUpButtonMain />
                    {props.signUpModal && <SignUpFormMain />}
                    {props.loginModal && <LoginFormMain />}
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
