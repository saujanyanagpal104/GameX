import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './views/LandingPage';
import Feed from './views/Feed';

const Routes = () => (
    <Router>
        <Switch>
            <Route path="/feed">
                <Feed />
            </Route>
            <Route path="/">
                <LandingPage />
            </Route>
        </Switch>
    </Router>
);

export default Routes;
