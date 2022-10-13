import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Newfeed from './../../pages/Newfeed';
import Profil from './../../pages/Profil';

const index = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Newfeed} />
                <Route exact path="/profil" component={Profil} />
                <Redirect to="/"/>
            </Switch>
        </Router>
    );
};

export default index;