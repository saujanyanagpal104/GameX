import { combineReducers } from 'redux';
import { loginButtonReducer } from './loginButtonReducer';

export const rootReducer = combineReducers({
    isLoginModalOpen: loginButtonReducer,
});
