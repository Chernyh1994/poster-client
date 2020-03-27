import React from 'react';
import { renderRoutes } from "react-router-config";
import { Switch, BrowserRouter } from 'react-router-dom';
import {routes} from '../routers/router';

export default function Pages() {

    return (
        <BrowserRouter>
            <Switch>
                {renderRoutes(routes)}
            </Switch>
        </BrowserRouter>
    );
}

