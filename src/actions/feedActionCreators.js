import { FETCHFEED, FETCHFEEDSUCCESSFUL } from '../actions/constants';
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
            .get('http://localhost:4000/api/feed')
            .then((res) => dispatch(fetchFeedSuccessful(res.data)));
    };
};
