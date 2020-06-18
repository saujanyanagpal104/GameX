import { LOGOUT } from './constants';

export const logout = () => ({
    type: LOGOUT,
    payload: { auth: false },
});
