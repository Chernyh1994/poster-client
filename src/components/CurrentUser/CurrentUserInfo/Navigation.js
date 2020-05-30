import React, {useState} from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ListIcon from '@material-ui/icons/List';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Card from '@material-ui/core/Card';
import { Link } from 'react-router-dom';

import { StyledCard } from '../../UI/StyledComponent/Card';

const Navigation = ({ userName }) => {
  const classes = StyledCard();

  const [value, setValue] = useState('');
  const handleChange = (evant, newValue) => {
    setValue(newValue);
  };

  return (
    <Card className={classes.root}>
      <BottomNavigation value={value} onChange={handleChange}>
        <BottomNavigationAction
          component={Link}
          to={`/${userName}/posts`}
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
      </BottomNavigation>
    </Card>
  );
};

export default Navigation;
