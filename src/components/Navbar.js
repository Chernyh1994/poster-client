import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { logout } from '../store/actions/authAction';
import { LinkNavbar } from './styledComponent/Link';
import { CustomAppBar, HeaderTitle } from './styledComponent/Templates';

const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <CustomAppBar>
      <Toolbar>
        <HeaderTitle>
            Twitter Test Project
        </HeaderTitle>
        {
          !user ?
            <div>
              <LinkNavbar to='/login'>
                <Button style={{ color: 'white' }}>
                Log in
                </Button>
              </LinkNavbar>
              <LinkNavbar to='/register'>
                <Button variant="outlined" style={{ color: 'white' }}>
                Sing up
                </Button>
              </LinkNavbar>
            </div> :
            <Button onClick={handleLogout} style={{ color: 'white' }}>
            Logout
            </Button>
        }
      </Toolbar>
    </CustomAppBar>
  );
};

export default Navbar;
