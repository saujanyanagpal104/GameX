import { TOGGLESIGNUPMODAL } from './constants';

export const handleSignUpForm = (boolValue) => ({
    type: TOGGLESIGNUPMODAL,
    payload: boolValue,
});
