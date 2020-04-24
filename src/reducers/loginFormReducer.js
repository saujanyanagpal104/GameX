import { LOGINFORMSUBMIT, LOGINSUCCESSFUL } from '../actions/constants';

export const loginFormReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGINFORMSUBMIT:
            return {
                isFetched: false,
            };
        case LOGINSUCCESSFUL:
            return {
                isFetched: true,
                data: action.payload,
            };
        default:
            return state;
    }
};
