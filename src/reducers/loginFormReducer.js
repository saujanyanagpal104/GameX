import { LOGINFORMSUBMIT, LOGINSUCCESSFUL, LOGOUT } from '../actions/constants';

export const loginFormReducer = (
    state = { isFetched: false, isAuthenticated: false },
    action
) => {
    switch (action.type) {
        case LOGINFORMSUBMIT:
            return {
                isFetched: false,
            };
        case LOGINSUCCESSFUL:
            return {
                isFetched: true,
                isAuthenticated: action.payload,
            };
        case LOGOUT:
            return {
                isAuthenticated: action.payload.auth,
            };
        default:
            return state;
    }
};
