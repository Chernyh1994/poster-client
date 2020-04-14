import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';

import { LinkMenu } from './styledComponent/Link';
import { DrawerStyled } from './styledComponent/DrawerStyled';

const Menu = () => {
  const classes = DrawerStyled();

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

        <LinkMenu to='/home'>
          <ListItem button>
            <ListItemIcon><HomeIcon/></ListItemIcon>
            <ListItemText primary={'Home'} />
          </ListItem>
        </LinkMenu>

        <LinkMenu to='/profile'>
          <ListItem button>
            <ListItemIcon><AccountCircleIcon/></ListItemIcon>
            <ListItemText primary={'Profile'} />
          </ListItem>
        </LinkMenu>

        <LinkMenu to='/list'>
          <ListItem button>
            <ListItemIcon><ListIcon/></ListItemIcon>
            <ListItemText primary={'List'} />
          </ListItem>
        </LinkMenu>

      </List>
    </Drawer>
  );
};

export default Menu;
