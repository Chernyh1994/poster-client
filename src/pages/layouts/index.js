import React from 'react';
import { renderRoutes } from "react-router-config";
import { useSelector } from 'react-redux';

import Menu from '../../components/Menu';
import Navbar from '../../components/Navbar';
import { useStyles } from '../../components/styledComponent/HeaderStyled';

const Header = ({route}) => {
    const classes = useStyles();
    const { isAuthenticat } = useSelector(state => state.authReducer);

    return( 
        <div>
           { !window.localStorage.getItem('token') && !isAuthenticat ?
            <div>
                <Navbar/>
                {renderRoutes(route.routes) }
            </div>
            :
            <div className={classes.root}>
                <Menu/>
                <Navbar/>
                <div>
                    <main className={classes.content}>
                        <div className={classes.toolbar} />
                        {renderRoutes(route.routes)}
                    </main>
                </div>
            </div> } 
        </div>
    )
};

export default Header;