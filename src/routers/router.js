import Home from '../pages/home';
import Login from '../pages/auth/login'
import Register from '../pages/auth/register';
import ErrorPage from '../pages/error';
import Headers from "../components/Headers";

export const routes = [
    {
        component: Headers,
        routes: [
            {
                path: "/",
                exact: true,
                component: Home
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