import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import GameMain from '../containers/GameMain';
import AddGameFormMain from '../containers/AddGameFormMain';
import Navbar from '../components/Navbar';

const Feed = (props) => {
    if (
        props.loginAuth.isAuthenticated ||
        props.registerAuth.isAuthenticated ||
        props.cookieAuth == 'true'
    ) {
        return (
            <div className="wrapper">
                <div className="feed-container">
                    <Navbar user={props.currentUser} />
                    <div className="add-game-block">
                        <AddGameFormMain />
                    </div>
                    <div className="games">
                        <GameMain />
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="not-logged-in">
                <span className="not-logged-in-text">
                    You are not logged in
                </span>
                <Link to="/">
                    <span className="login-button">LOGIN</span>
                </Link>
            </div>
        );
    }
};

export default Feed;
