import React from 'react';
import { connect } from 'react-redux';
import LogoutButton from '../components/LogoutButton';
import { logout } from '../actions/logoutActionCreators';

const LogoutButtonMain = (props) => {
    return (
        <>
            <LogoutButton logout={props.handleLogout} />
        </>
    );
};

const mapDispatchToProps = (dispatch) => ({
    handleLogout: () => dispatch(logout()),
});

export default connect(null, mapDispatchToProps)(LogoutButtonMain);
