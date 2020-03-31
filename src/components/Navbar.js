import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { logout } from '../store/actions/authAction';
import { CustomLinkNavbar } from './styledComponent/Link';
import { CustomAppBar, CustomHeadline } from './styledComponent/Templates';

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
            <CustomLinkNavbar to='/login'>
              <Button style={{ color: 'white' }}>
                Sing in
              </Button>
            </CustomLinkNavbar>
            <CustomLinkNavbar to='/register'>
              <Button variant="outlined" style={{ color: 'white' }}>
                Sing up
              </Button>
            </CustomLinkNavbar>
          </div> 
          :
          <Button onClick={handleLogout} style={{ color: 'white' }}>
            Logout
          </Button>
        }
      </Toolbar>
    </CustomAppBar>
  );
};

export default Navbar;