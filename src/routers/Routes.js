import React from 'react';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';

import { useToken } from '../utils/useToken';
import AppBar from '../components/AppBar/AppBar.js';
import Login from '../components/Auth/Login/Login.js';
import Register from '../components/Auth/Register/Register.js';
import CreatePost from '../components/Post/CreatePost/CreatePost.js';
import Posts from '../components/Post/PostList/Posts.js';
import Post from '../components/Post/AboutPost/Post.js';
import ProfileUsers from '../components/ProfileUsers/ProfileUsers.js';
import PersonalArea from '../components/CurrentUser/PersonalArea';
import CurrentUserPosts from '../components/CurrentUser/CurrentUserInfo/CurrentUserPosts/CurrentUserPosts';
import Error404 from '../components/Error/Error404.js';

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
          render: () => (isAuthorized ? <CreatePost/> : <Redirect to="/login"/>)
        },
        {
          path: '/posts',
          exact: true,
          render: () => (isAuthorized ? <Posts/> : <Redirect to="/login"/>)
        },
        {
          path: '/post/:id',
          render: (props) => (isAuthorized ? <Post props={props}/> : <Redirect to="/login"/>)
        },
        {
          path: '/:currentUserName',
          component: PersonalArea,
          routes: [
            {
              path: '/:currentUserName/posts',
              render: (props) => (isAuthorized ? <CurrentUserPosts/> : <Redirect to="/login"/>)
            }
          ]
        },
        {
          path: '/profile/:id',
          render: (props) => (isAuthorized ? <ProfileUsers props={props}/> : <Redirect to="/login"/>)
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
