import {
    TOGGLEADDGAMEMODAL,
    ADDGAMEFORMSUBMIT,
    GAMESUCCESSFULLYADDED,
} from './constants';
import axios from 'axios';
import qs from 'qs';
import { getCookie } from '../helpers/getCookie';

export const handleAddGameForm = (boolValue) => ({
    type: TOGGLEADDGAMEMODAL,
    payload: boolValue,
});

export const submitGameForm = () => ({
    type: ADDGAMEFORMSUBMIT,
    status: 'Form Submitted!',
});

export const gameAddedSuccessfully = (message) => ({
    type: GAMESUCCESSFULLYADDED,
    payload: message,
});

export const addGameImage = (imageFile, formData) => {
    const data = new FormData();
    data.append('game_poster', imageFile);
    data.append('game_name', formData.game_name);
    data.append('game_desc', formData.game_desc);
    return (dispatch) => {
        dispatch(submitGameForm);
        return axios
            .post('http://localhost:4000/api/addgame', data, {
                headers: {
                    Authorization: getCookie('token'),
                    'Content-type':
                        'multipart/form-data; boundary=---XXX---               ---XXX---',
                },
            })
            .then((res) =>
                dispatch(gameAddedSuccessfully('GAME SUCCESSFULLY ADDED!'))
            );
    };
};
