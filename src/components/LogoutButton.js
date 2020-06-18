import React from 'react';
import { deleteCookie } from '../helpers/deleteCookie';
import { useHistory } from 'react-router-dom';

const LogoutButton = (props) => {
    const history = useHistory();

    const logout = () => {
        deleteCookie('auth');
        deleteCookie('token');
        props.logout();
        history.push('/');
    };

    return (
        <div className="logout-button" onClick={logout}>
            <span className="logout-button-text">Logout</span>
        </div>
    );
};

export default LogoutButton;
