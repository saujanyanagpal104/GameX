import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './views/LandingPage';
import Dashboard from './views/Dashboard';

const Routes = () => (
    <Router>
        <Switch>
            <Route path="/dashboard">
                <Dashboard />
            </Route>
            <Route path="/">
                <LandingPage />
            </Route>
        </Switch>
    </Router>
);

export default Routes;
