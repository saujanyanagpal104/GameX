import React from 'react';
import Game from '../components/Game';

const GameMain = (props) => {
    return <Game games={props.games} />;
};

export default GameMain;
