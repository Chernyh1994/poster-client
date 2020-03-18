/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './home';
// eslint-disable-next-line import/no-named-as-default
import Registration from './auth/registration';
import ErrorPage from './error';

const Pages = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/regist" component={Registration} />
      <Route component={ErrorPage} />
    </Switch>
  </BrowserRouter>
);

export default Pages;
