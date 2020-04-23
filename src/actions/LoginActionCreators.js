import { TOGGLELOGINMODAL } from './constants';

export const handleLoginForm = (openModal) => ({
    type: TOGGLELOGINMODAL,
    payload: openModal,
});
