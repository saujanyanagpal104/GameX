import React from 'react';
import { connect } from 'react-redux';
import { handleAddGameForm, addGame } from '../actions/addGameActionCreators';
import { fetchFeed } from '../actions/feedActionCreators';
import AddGameForm from '../components/AddGameForm.js';

const AddGameFormMain = (props) => {
    return (
        <>
            {props.isAddGameModalOpen ? (
                <AddGameForm
                    handleForm={props.handleForm}
                    addGame={props.addGame}
                    fetchFeed={props.fetchFeed}
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
    addGame: (imageFile, formData) => dispatch(addGame(imageFile, formData)),
    fetchFeed: () => dispatch(fetchFeed()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddGameFormMain);
