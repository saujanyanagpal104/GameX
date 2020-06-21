import React, { useState } from 'react';
import AboutApp from '../components/AboutApp';
// import LoginWithGoogleButton from '../components/LoginWithGoogleButton';
import LoginFormMain from '../containers/LoginFormMain';
import LoginButtonMain from '../containers/LoginButtonMain';
import SignUpButtonMain from '../containers/SignUpButtonMain';
import SignUpFormMain from '../containers/SignUpFormMain';
import { getCookie } from '../helpers/getCookie';
import { useHistory } from 'react-router-dom';

const LandingPage = () => {
    const [signUpModal, toggleSignUpModal] = useState(false);

    const history = useHistory();
    const checkAuth = getCookie('auth');

    if (checkAuth == 'true') {
        history.push('/feed');
    }

    return (
        <div className="wrapper">
            <div className="landing-page">
                <div className="app-intro">
                    <AboutApp />
                </div>
                <div className="auth-buttons">
                    <LoginButtonMain />
                    <SignUpButtonMain />
                    <SignUpFormMain />
                    <LoginFormMain />
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
