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
import PostPage from './main/postPage';
import ProfilePage from './main/profilePage';
import UserPosts from '../components/profile/UserPosts';
import { useToken } from '../utils/useToken';

const Pages = () => {
  useToken();
  const user = useSelector((state) => state.authReducer.user);

  const isAuthorized = !!user;

  const routes = [
    {
      component: Header,
      routes: [
        {
          path: '/register',
          render: () => (isAuthorized ? <Redirect to="/"/> : <Register/>)
        },
        {
          path: '/login',
          render: () => (isAuthorized ? <Redirect to="/"/> : <Login/>)
        },
        {
          path: '/',
          exact: true,
          component: HomePage
        },
        {
          path: '/profile/:id',
          exact: true,
          component: ProfilePage,
          routes: [
            {
              path: '/profile/posts',
              component: UserPosts
            }
          ]
        },
        {
          path: '/posts',
          render: () => (isAuthorized ? <PostsPage/> : <Redirect to="/login"/>)
        },
        {
          path: '/post/:id',
          component: PostPage
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
