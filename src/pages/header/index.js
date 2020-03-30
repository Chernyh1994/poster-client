import React from 'react';
import { renderRoutes } from "react-router-config";
import { useSelector } from 'react-redux';
//
import { makeStyles } from '@material-ui/core/styles';
//
import Menu from '../../components/Menu';
import Navbar from '../../components/Navbar';

const useStyles = makeStyles((theme) => ({ 
    root: {
        display: 'flex',
      }, 
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
}));

const Header = ({route}) => {
    const classes = useStyles();
    const { isAuthenticat } = useSelector(state => state.authReducer);

    return(
        <>{
            !window.localStorage.getItem('token') && !isAuthenticat ?
            <>
                <Navbar/>
                {renderRoutes(route.routes) }
            </>
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
            </div>
        }</>     
    )
};

export default Header;