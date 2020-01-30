import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Page8 from '../pages/page8/index'
import Page7 from '../pages/page7/index'
import Page6 from '../pages/page6/index'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/historic" component={Page8} />
            <Route exact path="/search_login" component={Page7} />
            <Route exact path="/search_nologin" component={Page6} />
        </Switch>
    </BrowserRouter>
)

export default Routes;