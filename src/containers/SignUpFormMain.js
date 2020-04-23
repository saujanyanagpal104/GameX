import React from 'react';
import { connect } from 'react-redux';
import SignUpForm from '../components/SignUpForm';
import { handleSignUpForm } from '../actions/signUpActionCreators';

const SignUpFormMain = (props) => {
    return (
        <>
            {props.isSignUpModalOpen ? (
                <SignUpForm handleForm={props.handleForm} />
            ) : null}
        </>
    );
};

const mapStateToProps = (state) => ({
    isSignUpModalOpen: state.isSignUpModalOpen,
});

const mapDispatchToProps = (dispatch) => ({
    handleForm: (boolVal) => dispatch(handleSignUpForm(boolVal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpFormMain);
