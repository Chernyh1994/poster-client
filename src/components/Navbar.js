import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from './Menu';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/actions/authAction';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  authTitle: {
    display: 'flex'
  }

}));

function Navbar() {

  const dispatch = useDispatch();

  const classes = useStyles();

  const { isAuthenticat, userName } = useSelector(state => state.authReducer);

  const handleLogout = () => {
    dispatch(logout());
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Menu/>
          <Typography variant="h6" className={classes.title}>
              Twitter Test Project
          </Typography>
          { !window.localStorage.getItem('token') && !isAuthenticat ?
          <div>
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
          </div> 
          :
          <div className={classes.authTitle}>
            <h4>
              {userName}
            </h4>
            
            <Button onClick={handleLogout} style={{ color: 'white' }}>
              Logout
            </Button>
          </div>}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;