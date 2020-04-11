import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';
import Routes from './Routes';
import './styles/index.scss';

const preloadedState = {};

const store = createStore(rootReducer, preloadedState, applyMiddleware(thunk));

render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('root')
);
