import { FETCHFEEDSUCCESSFUL } from '../actions/constants';

export const feedReducer = (state = { games: [] }, action) => {
    switch (action.type) {
        case FETCHFEEDSUCCESSFUL:
            return action.payload;
        default:
            return state;
    }
};
