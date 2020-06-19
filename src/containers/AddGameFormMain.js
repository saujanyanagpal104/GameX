import React from 'react';
import { connect } from 'react-redux';
import {
    handleAddGameForm,
    addGameImage,
    addGameInfo,
} from '../actions/addGameActionCreators';
import AddGameForm from '../components/AddGameForm.js';

const AddGameFormMain = (props) => {
    return (
        <>
            {props.isAddGameModalOpen ? (
                <AddGameForm
                    handleForm={props.handleForm}
                    addGame={props.addGame}
                />
            ) : null}
        </>
    );
};

const mapStateToProps = (state) => ({
    isAddGameModalOpen: state.isAddGameModalOpen,
});

const mapDispatchToProps = (dispatch) => ({
    handleForm: (boolValue) => dispatch(handleAddGameForm(boolValue)),
    addGame: (imageFile, formData) =>
        dispatch(addGameImage(imageFile, formData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddGameFormMain);
