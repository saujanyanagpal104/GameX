import { TOGGLESIGNUPMODAL } from '../actions/constants';

export const signUpButtonReducer = (state = false, action) => {
    switch (action.type) {
        case TOGGLESIGNUPMODAL:
            return action.payload;
        default:
            return state;
    }
};
