import React from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';
import { handleLoginForm, loginUser } from '../actions/loginActionCreators';

const LoginFormMain = (props) => {
    return (
        <>
            {props.isLoginModalOpen ? (
                <LoginForm
                    handleForm={props.handleForm}
                    loginUser={props.loginUser}
                />
            ) : null}
        </>
    );
};

const mapStateToProps = (state) => ({
    isLoginModalOpen: state.isLoginModalOpen,
    ...state,
});

const mapDispatchToProps = (dispatch) => ({
    handleForm: (boolVal) => dispatch(handleLoginForm(boolVal)),
    loginUser: (formData) => dispatch(loginUser(formData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormMain);
