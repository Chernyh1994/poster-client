import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';

import { StyledCard } from './styledComponent/Card';

const ProfileCard = () => {
  const classes = StyledCard();
  const { user } = useSelector((state) => state.authReducer);

  return (
    <Card className={classes.root}>
      <CardContent>

        <Typography className={classes.title} variant="h5" component="h2">
            User name: {user.name}
        </Typography>
        <Typography className={classes.title} variant="h5" component="h2">
            Email: {user.email}
        </Typography>

      </CardContent>
    </Card>
  );
};

export default ProfileCard;
