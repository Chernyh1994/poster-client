import React, { useState } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import ListIcon from '@material-ui/icons/List';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Card from '@material-ui/core/Card';

import { StyledCard } from '../styledComponent/Card';
import { LinkNavigation } from '../styledComponent/Link';

const Navigation = () => {
  const classes = StyledCard();
  const [value, setValue] = useState('post');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card className={classes.root}>
      <BottomNavigation value={value} onChange={handleChange}>
        <BottomNavigationAction
          component={LinkNavigation}
          to='/profile/posts'
          label="Posts"
          value="post"
          icon={<ListIcon />}
        />
        <BottomNavigationAction
          component={LinkNavigation}
          to='/profile/favorites'
          label="Favorites"
          value="favorites"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          component={LinkNavigation}
          to='/profile/nearby'
          label="Nearby"
          value="nearby"
          icon={<LocationOnIcon />}
        />
        <BottomNavigationAction
          component={LinkNavigation}
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
