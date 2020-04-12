import React from 'react';
import LoginButton from '../components/LoginButton';
import SignUpButton from '../components/SignUpButton';
import AboutApp from '../components/AboutApp';
import LoginWithGoogleButton from '../components/LoginWithGoogleButton';

const LandingPage = () => (
    <div className="wrapper">
        <div className="landing-page">
            <div className="app-intro">
                <AboutApp />
            </div>
            <div className="auth-buttons">
                <LoginButton />
                <SignUpButton />
                <LoginWithGoogleButton />
            </div>
        </div>
    </div>
);

export default LandingPage;
