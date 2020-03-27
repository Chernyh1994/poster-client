import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { renderRoutes } from "react-router-config";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function Headers({ route }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Twitter Test Project
          </Typography>
          <Link to='/login' className="link">
            <Button style={{ color: 'white' }}>
              Sing in
            </Button>
          </Link>
          <Link to='/register' className="link">
            <Button variant="outlined" style={{ color: 'white' }}>
              Sing up
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      {renderRoutes(route.routes)}
    </div>
  );
}
