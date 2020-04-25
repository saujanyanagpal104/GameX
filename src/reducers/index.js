import { combineReducers } from 'redux';
import { loginButtonReducer } from './loginButtonReducer';
import { signUpButtonReducer } from './signUpButtonReducer';
import { loginFormReducer } from '../reducers/loginFormReducer';
import { signUpFormReducer } from '../reducers/signUpFormReducer';

export const rootReducer = combineReducers({
    isLoginModalOpen: loginButtonReducer,
    isSignUpModalOpen: signUpButtonReducer,
    auth: loginFormReducer,
    register: signUpFormReducer,
});
