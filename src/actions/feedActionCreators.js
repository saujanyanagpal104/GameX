import { FETCHFEED, FETCHFEEDSUCCESSFUL } from '../actions/constants';
import { getCookie } from '../helpers/getCookie';
import axios from 'axios';

export const fetchingFeed = () => ({
    type: FETCHFEED,
    status: 'Is Fetching!',
});

export const fetchFeedSuccessful = (json) => ({
    type: FETCHFEEDSUCCESSFUL,
    payload: json,
});

export const fetchFeed = () => {
    return (dispatch) => {
        dispatch(fetchingFeed);
        return axios
            .get('http://localhost:4000/api/feed', {
                headers: {
                    Authorization: getCookie('token'),
                },
            })
            .then((res) => dispatch(fetchFeedSuccessful(res.data)));
    };
};
