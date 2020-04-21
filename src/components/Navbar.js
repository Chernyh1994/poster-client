import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';
import { logout } from '../store/actions/authAction';
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
        {!user ?
          <div>
            <Button style={{ color: 'white' }} component={Link} to='/login'>Log in</Button>
            <Button variant="outlined" style={{ color: 'white' }} component={Link} to='/register'>Sing up</Button>
          </div> :
          <Button onClick={handleLogout} style={{ color: 'white' }} component={Link} to='/login'>Logout</Button>}
      </Toolbar>
    </CustomAppBar>
  );
};

export default Navbar;
