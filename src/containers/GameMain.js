import React from 'react';
import Game from '../components/Game';
import { ProgressPlugin } from 'webpack';

const GameMain = (props) => {
    return <Game games={props.games} />;
};

export default GameMain;
