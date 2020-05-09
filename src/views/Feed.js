import React from 'react';
import { Link } from 'react-router-dom';
import Game from '../components/Game';
// import AddGameForm from '../components/AddGameForm';
import Navbar from '../components/Navbar';

const Feed = (props) => {
    if (props.loginAuth.isAuthenticated || props.registerAuth.isAuthenticated) {
        return (
            <div className="wrapper">
                <div className="feed-container">
                    <Navbar />
                    {/* <div className='add-game-block'>
                    <AddGame />
                </div> */}
                    <div className="games">
                        <Game games={props.feed.games} />
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
