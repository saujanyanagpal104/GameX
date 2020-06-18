import React from 'react';
import AddGameButtonMain from '../containers/AddGameButtonMain';
import LogoutButtonMain from '../containers/LogoutButtonMain';

const Navbar = (props) => {
    return (
        <div className="navbar">
            <div className="logo">
                <h1>GameX</h1>
            </div>
            <div className="other-stuff">
                <span className="current-user-name">
                    {props.user ? props.user.full_name : null}
                </span>
                <AddGameButtonMain />
                <LogoutButtonMain />
            </div>
        </div>
    );
};

export default Navbar;
