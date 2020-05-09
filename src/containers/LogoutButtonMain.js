import React from 'react';
import { connect } from 'react-redux';
import LogoutButton from '../components/LogoutButton';
import { handleLoginForm } from '../actions/loginActionCreators';

const LogoutButtonMain = (props) => {
    return (
        <>
            <LogoutButton
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

export default connect(mapStateToProps, mapDispatchToProps)(LogoutButtonMain);
