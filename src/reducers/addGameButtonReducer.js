import { TOGGLEADDGAMEMODAL } from '../actions/constants';

export const addGameButtonReducer = (state = false, action) => {
    switch (action.type) {
        case TOGGLEADDGAMEMODAL:
            return action.payload;
        default:
            return state;
    }
};
