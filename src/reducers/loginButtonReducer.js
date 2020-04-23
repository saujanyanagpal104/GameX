import { TOGGLELOGINMODAL } from '../actions/constants';

export const loginButtonReducer = (state = false, action) => {
    switch (action.type) {
        case TOGGLELOGINMODAL:
            return action.payload;
        default:
            return state;
    }
};
