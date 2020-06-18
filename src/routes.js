import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './views/LandingPage';
import FeedMain from './containers/FeedMain';

const Routes = () => (
    <Router>
        <Switch>
            <Route path="/feed">
                <FeedMain />
            </Route>
            <Route path="/" exact>
                <LandingPage />
            </Route>
        </Switch>
    </Router>
);

export default Routes;
