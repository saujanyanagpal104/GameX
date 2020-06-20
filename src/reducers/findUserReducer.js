import { GOTUSERSUCCESSFULLY } from '../actions/constants';

export const findUserReducer = (state = {}, action) => {
    switch (action.type) {
        case GOTUSERSUCCESSFULLY:
            return action.payload;
        default:
            return state;
    }
};
