import React from 'react';
import { renderRoutes } from "react-router-config";
import { useSelector } from 'react-redux';

import Menu from '../../components/Menu';
import Navbar from '../../components/Navbar';
import { HeaderStyled } from '../../components/styledComponent/HeaderStyled';

const Header = ({route}) => {
    const classes = HeaderStyled();
    const { token } = useSelector(state => state.authReducer);

    return( 
        <div>
            <div className={classes.toolbar} />
           {!token ?
            <main className={classes.content}>
                <Navbar/>
                {renderRoutes(route.routes) }
            </main>
            :
            <div className={classes.root}>
                <Menu/>
                <Navbar/>
                <div>
                    <main className={classes.content}>
                        {renderRoutes(route.routes)}
                    </main>
                </div>
            </div> } 
        </div>
    )
};

export default Header;