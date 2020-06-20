import { GETUSER, GOTUSERSUCCESSFULLY } from '../actions/constants';
import axios from 'axios';
import { getCookie } from '../helpers/getCookie';

export const gotUserSuccessfully = (user) => ({
    type: GOTUSERSUCCESSFULLY,
    payload: user,
});

export const getUser = () => ({
    type: GETUSER,
    payload: 'Getting User!!',
});

export const findUser = (userId) => {
    console.log(userId, 'userId');
    return (dispatch) => {
        dispatch(getUser());
        return axios
            .get(`http://localhost:4000/api/getUser?userId=${userId}`, {
                headers: {
                    Authorization: getCookie('token'),
                },
            })
            .then((res) => dispatch(gotUserSuccessfully(res.data)));
    };
};
