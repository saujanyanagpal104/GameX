import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Feed from '../views/Feed';
import { fetchFeed } from '../actions/feedActionCreators';

const FeedMain = (props) => {
    useEffect(() => {
        props.fetchFeed();
    }, []);

    return (
        <>
            <Feed
                loginAuth={props.auth}
                registerAuth={props.register}
                feed={props.feed}
            />
        </>
    );
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    register: state.register,
    feed: state.feed,
});

const mapDispatchToProps = (dispatch) => ({
    fetchFeed: () => dispatch(fetchFeed()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedMain);
