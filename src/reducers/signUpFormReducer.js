import {
    SIGNUPFORMSUBMIT,
    SIGNUPSUCCESSFUL,
    LOGOUT,
} from '../actions/constants';

export const signUpFormReducer = (
    state = { isFetched: false, isAuthenticated: false },
    action
) => {
    switch (action.type) {
        case SIGNUPFORMSUBMIT:
            return {
                isFetched: false,
            };
        case SIGNUPSUCCESSFUL:
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
