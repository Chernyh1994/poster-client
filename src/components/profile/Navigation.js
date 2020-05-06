import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import ListIcon from '@material-ui/icons/List';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Card from '@material-ui/core/Card';
import { Link } from 'react-router-dom';

import { StyledCard } from '../styledComponent/Card';

const Navigation = ({ handleChange, value }) => {
  const classes = StyledCard();

  return (
    <Card className={classes.root}>
      <BottomNavigation value={value} onChange={handleChange}>
        <BottomNavigationAction
          label="Posts"
          value="posts"
          icon={<ListIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to='/profile/favorites'
          label="Favorites"
          value="favorites"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to='/profile/nearby'
          label="Nearby"
          value="nearby"
          icon={<LocationOnIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to='/profile/folder'
          label="Folder"
          value="folder"
          icon={<FolderIcon />}
        />
      </BottomNavigation>
    </Card>
  );
};

export default Navigation;
