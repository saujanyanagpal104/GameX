import React from 'react';
import AddGameButtonMain from '../containers/AddGameButtonMain';
import LogoutButtonMain from '../containers/LogoutButtonMain';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <h1>GameX</h1>
            </div>
            <div className="other-stuff">
                <span className="current-user-name">Hi!! Name?!!</span>
                <AddGameButtonMain />
                <LogoutButtonMain />
            </div>
        </div>
    );
};

export default Navbar;
