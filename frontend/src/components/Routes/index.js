import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './../../pages/Home';
import Profil from './../../pages/Profil';
import Navbar from './../Navbar';

const index = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/profil" component={Profil} />
                <Redirect to="/"/>
            </Switch>
        </Router>
    );
};

export default index;