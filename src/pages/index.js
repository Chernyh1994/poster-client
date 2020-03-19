/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Home from './home';
import Login from './auth/login'
import Registration from './auth/registration';
import ErrorPage from './error';
import Navbar from "../components/Navbar";

const Pages = () => (
  <BrowserRouter>

      <Navbar/>

      <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/register" component={Registration} />
          <Route path="/login" component={Login} />
          <Route component={ErrorPage} />
      </Switch>
  </BrowserRouter>
);

export default Pages;
