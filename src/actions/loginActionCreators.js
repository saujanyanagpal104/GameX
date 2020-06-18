import {
    TOGGLELOGINMODAL,
    LOGINFORMSUBMIT,
    LOGINSUCCESSFUL,
} from './constants';
import axios from 'axios';
import qs from 'qs';

export const handleLoginForm = (boolValue) => ({
    type: TOGGLELOGINMODAL,
    payload: boolValue,
});

export const submitForm = () => ({
    type: LOGINFORMSUBMIT,
    status: 'Form Submitted!',
});

export const loginSuccessful = (json) => {
    let date = new Date();
    date.setTime(date.getTime() + 60 * 60);
    document.cookie = `token=${json.token}; expires=${date}`;
    document.cookie = `auth=${json.auth}; expires=${date}`;
    return {
        type: LOGINSUCCESSFUL,
        payload: json.auth,
    };
};

export const loginUser = (formData) => {
    return (dispatch) => {
        dispatch(submitForm);
        return axios
            .post('http://localhost:4000/api/login', qs.stringify(formData), {
                'Content-Type':
                    'application/x-www-form-urlencoded;charset=UTF-8',
            })
            .then((res) => dispatch(loginSuccessful(res.data)));
    };
};
