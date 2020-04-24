import { combineReducers } from 'redux';
import { loginButtonReducer } from './loginButtonReducer';
import { signUpButtonReducer } from './signUpButtonReducer';
import { loginFormReducer } from '../reducers/loginFormReducer';

export const rootReducer = combineReducers({
    isLoginModalOpen: loginButtonReducer,
    isSignUpModalOpen: signUpButtonReducer,
    login: loginFormReducer,
});
