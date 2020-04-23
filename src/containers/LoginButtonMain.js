import React from 'react';
import { connect } from 'react-redux';
import LoginButton from '../components/LoginButton';
import { handleLoginForm } from '../actions/LoginActionCreators';

const LoginButtonMain = (props) => {
    console.log(props, 'mainn');
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
    handleForm: (openModal) => dispatch(handleLoginForm(openModal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginButtonMain);
