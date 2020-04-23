import React from 'react';
import SignUpButton from '../components/SignUpButton';
import { connect } from 'react-redux';
import { handleSignUpForm } from '../actions/signUpActionCreators';

const SignUpButtonMain = (props) => (
    <>
        <SignUpButton
            formState={props.isSignUpModalOpen}
            handleForm={props.handleForm}
        />
    </>
);

const mapStateToProps = (state) => ({
    isSignUPModalOpen: state.isSignUpModalOpen,
});

const mapDispatchToProps = (dispatch) => ({
    handleForm: (boolVal) => dispatch(handleSignUpForm(boolVal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpButtonMain);
