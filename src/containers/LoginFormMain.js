import React from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';

const LoginFormMain = () => {
    return (
        <>
            {loginModal ? (
                <LoginForm
                    formState={loginModal}
                    handleForm={toggleLoginModal}
                />
            ) : null}
        </>
    );
};

const mapStateToProps = (state) => {};

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormMain);
