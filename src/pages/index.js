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
import CreatrPost from './main/createPost';

const Pages = () => {

    const {token} = useSelector(state => state.authReducer);

    const privateRoute = !!token

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
                    path: "/create",
                    render: (props) => privateRoute ? <CreatrPost/> : <Redirect to="/login"/> ,
                },
                {
                    path: "/register",
                    render: (props) => privateRoute ? <Redirect to="/"/> : <Register/> ,
                },
                {
                    path: "/login",
                    render: (props) => privateRoute ? <Redirect to="/"/> : <Login/> ,
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