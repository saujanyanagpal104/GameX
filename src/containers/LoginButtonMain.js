import React from 'react';
import { connect } from 'react-redux';
import LoginButton from '../components/LoginButton';
import { handleLoginForm } from '../actions/loginActionCreators';

const LoginButtonMain = (props) => {
    return (
        <>
            <LoginButton
                formState={props.isLoginModalOpen}
                handleForm={props.handleForm}
            />
        </>
    );
};

const mapStateToProps = (state) => ({
    isLoginModalOpen: state.isLoginModalOpen,
});

const mapDispatchToProps = (dispatch) => ({
    handleForm: (boolVal) => dispatch(handleLoginForm(boolVal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginButtonMain);
