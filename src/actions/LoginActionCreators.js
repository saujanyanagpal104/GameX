import { TOGGLELOGINMODAL } from './constants';

export const handleLoginForm = (boolValue) => ({
    type: TOGGLELOGINMODAL,
    payload: boolValue,
});
