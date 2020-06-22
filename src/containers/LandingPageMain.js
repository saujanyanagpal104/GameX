import React from 'react';
import { connect } from 'react-redux';
import LandingPage from '../views/LandingPage';
import { getCookie } from '../helpers/getCookie';
import { useHistory } from 'react-router-dom';

const LandingPageMain = (props) => {
    console.log(props, 'landuig');
    const history = useHistory();
    const checkAuth = getCookie('auth');

    if (checkAuth == 'true') {
        history.push('/feed');
    }
    return (
        <LandingPage
            loginModal={props.loginModal}
            signUpModal={props.signUpModal}
        />
    );
};

const mapStateToProps = (state) => ({
    loginModal: state.isLoginModalOpen,
    signUpModal: state.isSignUpModalOpen,
});

export default connect(mapStateToProps, null)(LandingPageMain);
