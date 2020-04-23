import { combineReducers } from 'redux';
import { loginButtonReducer } from './loginButtonReducer';
import { signUpButtonReducer } from './signUpButtonReducer';

export const rootReducer = combineReducers({
    isLoginModalOpen: loginButtonReducer,
    isSignUpModalOpen: signUpButtonReducer,
});
