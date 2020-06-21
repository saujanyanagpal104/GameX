import React, { useEffect } from 'react';
import Game from '../components/Game';
import { fetchFeed } from '../actions/feedActionCreators';
import { connect } from 'react-redux';

const GameMain = (props) => {
    return <Game games={props.games} />;
};

const mapStateToProps = (state) => ({
    games: state.feed.games,
});

const mapDispatchToProps = (dispatch) => ({
    fetchFeed: () => dispatch(fetchFeed()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameMain);
