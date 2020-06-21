import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Feed from '../views/Feed';
import { fetchFeed } from '../actions/feedActionCreators';
import { getCookie } from '../helpers/getCookie';

const FeedMain = (props) => {
    useEffect(() => {
        props.fetchFeed();
    }, []);

    return (
        <>
            <Feed
                cookieAuth={getCookie('auth')}
                loginAuth={props.auth}
                registerAuth={props.register}
                feed={props.feed ? props.feed : null}
                currentUser={props.currentUser}
            />
        </>
    );
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    register: state.register,
    feed: state.feed,
    currentUser: state.feed.user,
});

const mapDispatchToProps = (dispatch) => ({
    fetchFeed: () => dispatch(fetchFeed()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedMain);
