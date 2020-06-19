import React from 'react';
import { connect } from 'react-redux';
import AddGameButton from '../components/AddGameButton';
import { handleAddGameForm } from '../actions/addGameActionCreators';

const AddGameButtonMain = (props) => {
    return (
        <>
            <AddGameButton
                formState={props.isAddGameModalOpen}
                handleForm={props.handleForm}
            />
        </>
    );
};

const mapStateToProps = (state) => ({
    isLoginModalOpen: state.isAddGameModalOpen,
});

const mapDispatchToProps = (dispatch) => ({
    handleForm: (boolVal) => dispatch(handleAddGameForm(boolVal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddGameButtonMain);
