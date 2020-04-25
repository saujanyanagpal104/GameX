import React from 'react';
import { connect } from 'react-redux';
import Feed from '../views/Feed';

const FeedMain = (props) => (
    <>
        <Feed loginAuth={props.auth} registerAuth={props.register} />
    </>
);

const mapStateToProps = (state) => ({
    auth: state.auth,
    register: state.register,
});

export default connect(mapStateToProps, null)(FeedMain);
