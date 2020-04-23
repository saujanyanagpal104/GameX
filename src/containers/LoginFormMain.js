import React from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';
import { handleLoginForm } from '../actions/loginActionCreators';

const LoginFormMain = (props) => {
    return (
        <>
            {props.isLoginModalOpen ? (
                <LoginForm handleForm={props.handleForm} />
            ) : null}
        </>
    );
};

const mapStateToProps = (state) => ({
    isLoginModalOpen: state.isLoginModalOpen,
});

const mapDispatchToProps = (dispatch) => ({
    handleForm: (boolVal) => dispatch(handleLoginForm(boolVal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormMain);
