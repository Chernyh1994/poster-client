import Home from '../pages/main/home';
import Login from '../pages/auth/login'
import Register from '../pages/auth/register';
import ErrorPage from '../pages/error';
import Header from '../pages/header';
import Test from '../pages/main/test';

export const routes = [
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
                exact: true,
                component: Test
            },
            {
                path: "/register",
                exact: true,
                component: Register
            },
            {
                path: "/login",
                exact: true,
                component: Login
            },
            {
                component: ErrorPage
            },
        ]
    }
];