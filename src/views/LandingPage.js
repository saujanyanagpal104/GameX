import React, { useState } from 'react';
import SignUpButton from '../components/SignUpButton';
import AboutApp from '../components/AboutApp';
// import LoginWithGoogleButton from '../components/LoginWithGoogleButton';
import SignUpForm from '../components/SignUpForm';
import LoginFormMain from '../containers/LoginFormMain';
import LoginButtonMain from '../containers/LoginButtonMain';

const LandingPage = () => {
    const [signUpModal, toggleSignUpModal] = useState(false);

    return (
        <div className="wrapper">
            <div className="landing-page">
                <div className="app-intro">
                    <AboutApp />
                </div>
                <div className="auth-buttons">
                    <LoginButtonMain />
                    {/* <SignUpButton /> */}
                    {/* {signUpModal ? (
                        <SignUpForm />
                    ) : null} */}
                    <LoginFormMain />
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
