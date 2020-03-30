import React from 'react';
import { LinkMenu } from './styledComponent/Link';
//
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import PostAddIcon from '@material-ui/icons/PostAdd';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
}));

const Menu = () => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.toolbar} />
      <List>

        <LinkMenu to='/'>
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

        <ListItem >
          <Button color="primary" startIcon={<PostAddIcon fontSize="small" />} >
            New Post
          </Button>
        </ListItem>

      </List>
    </Drawer>
  );
}

export default Menu;