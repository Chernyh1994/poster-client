import React from 'react';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';

import AppBar from '../components/AppBar/AppBar.js';
import Login from '../components/Auth/Login/Login.js';
import Register from '../components/Auth/Register/Register.js';
import CreatePost from '../components/Post/CreatePost/CreatePost.js';
import Posts from '../components/Post/PostList/Posts.js';
import Post from '../components/Post/AboutPost/Post.js';
import Error404 from '../components/Error/Error404.js';
import ProfileUsers from '../components/ProfileUsers/ProfileUsers.js';
import { useToken } from '../utils/useToken';

const Routes = () => {
  useToken();

  const isAuthorized = useSelector((state) => state.currentAuthUser.auth.user);
  const routes = [
    {
      component: AppBar,
      routes: [
        {
          path: '/register',
          exact: true,
          render: () => (isAuthorized ? <Redirect to="/"/> : <Register/>)
        },
        {
          path: '/login',
          exact: true,
          render: () => (isAuthorized ? <Redirect to="/"/> : <Login/>)
        },
        {
          path: '/',
          exact: true,
          component: CreatePost
        },
        {
          path: '/profile/:id',
          component: ProfileUsers
          // routes: [
          //   {
          //     path: '/profile',
          //     component:
          //   }
          // ]
        },
        {
          path: '/posts',
          exact: true,
          render: () => (isAuthorized ? <Posts/> : <Redirect to="/login"/>)
        },
        {
          path: '/post/:id',
          component: Post
        },
        {
          component: Error404
        }
      ]
    }
  ];
  return (
    <BrowserRouter>
      {renderRoutes(routes)}
    </BrowserRouter>
  );
};

export default Routes;
