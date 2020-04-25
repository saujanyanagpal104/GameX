import {
    TOGGLESIGNUPMODAL,
    SIGNUPFORMSUBMIT,
    SIGNUPSUCCESSFUL,
} from './constants';
import axios from 'axios';
import qs from 'qs';

export const handleSignUpForm = (boolValue) => ({
    type: TOGGLESIGNUPMODAL,
    payload: boolValue,
});

export const submitForm = () => ({
    type: SIGNUPFORMSUBMIT,
    status: 'Form Submitted!',
});

export const signUpSuccessful = (json) => ({
    type: SIGNUPSUCCESSFUL,
    payload: json,
});

export const signUpUser = (formData) => {
    return (dispatch) => {
        dispatch(submitForm);
        return axios
            .post(
                'http://localhost:4000/api/register',
                qs.stringify(formData),
                {
                    'Content-Type':
                        'application/x-www-form-urlencoded;charset=UTF-8',
                }
            )
            .then((res) => dispatch(signUpSuccessful(res.data)));
    };
};
