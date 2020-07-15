import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Profile from './pages/profile';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Profile} />
            </Switch>
        </BrowserRouter>
    )
}