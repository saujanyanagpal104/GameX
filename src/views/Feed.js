import React from 'react';
import { Link } from 'react-router-dom';

const Feed = (props) => {
    if (props.loginAuth.isAuthenticated || props.registerAuth.isAuthenticated) {
        return <h1>Feed</h1>;
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
