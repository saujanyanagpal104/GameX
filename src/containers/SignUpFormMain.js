import React from 'react';
import { connect } from 'react-redux';
import SignUpForm from '../components/SignUpForm';
import { handleSignUpForm, signUpUser } from '../actions/signUpActionCreators';

const SignUpFormMain = (props) => {
    return (
        <>
            {props.isSignUpModalOpen ? (
                <SignUpForm
                    handleForm={props.handleForm}
                    handleSignUp={props.handleSignUp}
                    register={props.register}
                />
            ) : null}
        </>
    );
};

const mapStateToProps = (state) => ({
    isSignUpModalOpen: state.isSignUpModalOpen,
    register: state.register,
});

const mapDispatchToProps = (dispatch) => ({
    handleForm: (boolVal) => dispatch(handleSignUpForm(boolVal)),
    handleSignUp: (formData) => dispatch(signUpUser(formData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpFormMain);
