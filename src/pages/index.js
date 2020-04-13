/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/display-name */
import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Switch, BrowserRouter } from 'react-router-dom';
import { Redirect } from 'react-router';
import { useSelector } from 'react-redux';

import Home from './main/home';
import Login from './auth/login';
import Register from './auth/register';
import Error404 from './error';
import Header from './layouts';
import CreatePost from './main/createPost';
import postPage from './main/postPage';
import Profile from './main/profile';

const Pages = () => {
  const user = useSelector((state) => state.authReducer.user);

  const isAuthorized = !!user;

  const routes = [
    {
      component: Header,
      routes: [
        {
          path: '/',
          exact: true,
          component: Home
        },
        {
          path: '/create',
          render: () => (isAuthorized ? <CreatePost/> : <Redirect to="/login"/>)
        },
        {
          path: '/register',
          render: () => (isAuthorized ? <Redirect to="/"/> : <Register/>)
        },
        {
          path: '/login',
          render: () => (isAuthorized ? <Redirect to="/"/> : <Login/>)
        },
        {
          path: '/profile',
          render: () => (isAuthorized ? <Profile/> : <Redirect to="/login"/>)
        },
        {
          path: '/post/:id',
          component: postPage
        },
        {
          component: Error404
        }
      ]
    }
  ];

  return (
    <BrowserRouter>
      <Switch>
        {renderRoutes(routes)}
      </Switch>
    </BrowserRouter>
  );
};

export default Pages;
