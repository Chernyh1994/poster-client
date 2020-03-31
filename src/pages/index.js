import React from 'react';
import { renderRoutes } from "react-router-config";
import { Switch, BrowserRouter } from 'react-router-dom';
import { Redirect } from 'react-router';
import { useSelector } from 'react-redux';

import Home from './main/home';
import Login from './auth/login'
import Register from './auth/register';
import Error404 from './error';
import Header from './layouts';
import Test from './main/test';

const Pages = () => {

    const token = useSelector(state => state.authReducer);

    const privateRoute = !window.localStorage.getItem('token') || !token

    const routes = [
        {
            component: Header,
            routes: [
                {
                    path: "/",
                    exact: true,
                    component: Home
                },
                {
                    path: "/test",
                    render: (props) => privateRoute ? <Redirect to="/login"/> : <Test/> ,
                },
                {
                    path: "/register",
                    render: (props) => privateRoute ? <Register/> : <Redirect to="/"/>,
                },
                {
                    path: "/login",
                    render: (props) => privateRoute ? <Login/> : <Redirect to="/"/>,
                },
                {
                    component: Error404
                },
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