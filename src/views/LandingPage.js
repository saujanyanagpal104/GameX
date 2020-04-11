import React from 'react';
import LoginButton from '../components/LoginButton';
import SignUpButton from '../components/SignUpButton';
import AboutApp from '../components/AboutApp';

const LandingPage = () => (
    <div className="wrapper">
        <AboutApp />
        <LoginButton />
        <SignUpButton />
    </div>
);

export default LandingPage;
