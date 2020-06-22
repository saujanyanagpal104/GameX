import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPageMain from './containers/LandingPageMain';
import FeedMain from './containers/FeedMain';

const Routes = () => (
    <Router>
        <Switch>
            <Route path="/feed">
                <FeedMain />
            </Route>
            <Route path="/" exact>
                <LandingPageMain />
            </Route>
        </Switch>
    </Router>
);

export default Routes;
