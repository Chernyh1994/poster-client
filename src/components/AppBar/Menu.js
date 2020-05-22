import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { DrawerStyled } from '../styledComponent/DrawerStyled';

const Menu = () => {
  const classes = DrawerStyled();
  const user = useSelector((state) => state.currentAuthUser.auth.user);

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.toolbar} />
      <List>
        <ListItem
          button
          component={Link}
          to='/' >
          <ListItemIcon><HomeIcon/></ListItemIcon>
          <ListItemText primary={'Home'} />
        </ListItem>

        <ListItem
          button
          component={Link}
          to={`/profile/${user.id}`}
        >
          <ListItemIcon><AccountCircleIcon/></ListItemIcon>
          <ListItemText primary={'Profile'} />
        </ListItem>

        <ListItem
          button
          component={Link}
          to='/posts'
        >
          <ListItemIcon><ListIcon/></ListItemIcon>
          <ListItemText primary={'List'} />
        </ListItem>

      </List>
    </Drawer>
  );
};

export default Menu;
