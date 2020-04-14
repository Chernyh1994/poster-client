/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/display-name */
import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Switch, BrowserRouter } from 'react-router-dom';
import { Redirect } from 'react-router';
import { useSelector } from 'react-redux';

import HomePage from './main/homePage';
import Login from './auth/login';
import Register from './auth/register';
import Error404 from './error';
import Header from './layouts';
import PostsPage from './main/postsPage';
import postPage from './main/postPage';
import ProfilePage from './main/profilePage';

const Pages = () => {
  const user = useSelector((state) => state.authReducer.user);

  const isAuthorized = !!user;

  const routes = [
    {
      component: Header,
      routes: [
        {
          path: '/home',
          render: () => (isAuthorized ? <HomePage/> : <Redirect to="/login"/>)
        },
        {
          path: '/list',
          render: () => (isAuthorized ? <PostsPage/> : <Redirect to="/login"/>)
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
          render: () => (isAuthorized ? <ProfilePage/> : <Redirect to="/login"/>)
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
