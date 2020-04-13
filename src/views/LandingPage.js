import React, { useState } from 'react';
import LoginButton from '../components/LoginButton';
import SignUpButton from '../components/SignUpButton';
import AboutApp from '../components/AboutApp';
import LoginWithGoogleButton from '../components/LoginWithGoogleButton';
import SignUpForm from '../components/SignUpForm';

const LandingPage = () => {
    const [showModal, setModalState] = useState(false);

    return (
        <div className="wrapper">
            <div className="landing-page">
                <div className="app-intro">
                    <AboutApp />
                </div>
                <div className="auth-buttons">
                    <LoginButton />
                    <SignUpButton handleState={setModalState} />
                    <LoginWithGoogleButton />
                    {showModal ? <SignUpForm /> : null}
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
