import React from 'react';
import { renderRoutes } from "react-router-config";
import { Switch, BrowserRouter } from 'react-router-dom';
// 
import { Redirect } from 'react-router';
import { useSelector } from 'react-redux';
//
import Home from './main/home';
import Login from './auth/login'
import Register from './auth/register';
import ErrorPage from './error';
import Header from './header';
import Test from './main/test';

export default function Pages() {

    const isAuthenticat = useSelector(state => state.authReducer);

    const privateRoute = !window.localStorage.getItem('token') || !isAuthenticat

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
                    component: ErrorPage
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
}

