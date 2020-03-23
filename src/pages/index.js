/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';


import Home from './home';
import Login from './auth/login'
import Register from './auth/register';
import ErrorPage from './error';
import Headers from "../components/Headers";

export default function Pages() {

    return (
          <BrowserRouter>

              <Headers/>

              <Switch>
                  <Route path="/" component={Home} exact />
                  <Route path="/register" component={Register} />
                  <Route path="/login" component={Login} />
                  <Route component={ErrorPage} />
              </Switch>
          </BrowserRouter>
    );
}

