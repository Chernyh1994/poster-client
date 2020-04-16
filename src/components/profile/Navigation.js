import React, { useState } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import ListIcon from '@material-ui/icons/List';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Card from '@material-ui/core/Card';

import { StyledCard } from '../styledComponent/Card';

const Navigation = () => {
  const classes = StyledCard();
  const [value, setValue] = useState('post');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card className={classes.root}>
      <BottomNavigation value={value} onChange={handleChange}>
        <BottomNavigationAction label="Posts" value="post" icon={<ListIcon />} />
        <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
        <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
      </BottomNavigation>
    </Card>
  );
};

export default Navigation;
