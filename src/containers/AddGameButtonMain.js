import React from 'react';
import { connect } from 'react-redux';
import AddGameButton from '../components/AddGameButton';
import { handleLoginForm } from '../actions/loginActionCreators';

const AddGameButtonMain = (props) => {
    return (
        <>
            <AddGameButton
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

export default connect(mapStateToProps, mapDispatchToProps)(AddGameButtonMain);
