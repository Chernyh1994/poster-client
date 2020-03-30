import React from 'react';
//
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/actions/authAction';
//
import { LinkNavbar } from './styledComponent/Link';
import { CustomAppBar, CustomHeadline } from './styledComponent/Templates';
//
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const Navbar = () => {

  const dispatch = useDispatch();
  const { token } = useSelector(state => state.authReducer);

  const handleLogout = () => {
    dispatch(logout());
  }

  return (
      <CustomAppBar>
        <Toolbar>
          <CustomHeadline>
              Twitter Test Project
          </CustomHeadline>
          { 
            !window.localStorage.getItem('token') && !token ?
            <div>
              <LinkNavbar to='/login'>
                <Button style={{ color: 'white' }}>
                  Sing in
                </Button>
              </LinkNavbar>
              <LinkNavbar to='/register'>
                <Button variant="outlined" style={{ color: 'white' }}>
                  Sing up
                </Button>
              </LinkNavbar>
            </div> 
            :
            <Button onClick={handleLogout} style={{ color: 'white' }}>
              Logout
            </Button>
          }
        </Toolbar>
      </CustomAppBar>
  );
}

export default Navbar;