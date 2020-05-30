import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { StyledCard } from './StyledComponent/Card';
import Spinner from './Spinner';

const LoadingCard = () => {
  const classes = StyledCard();

  return (
    <Card className={classes.root}>
      <CardContent>

        <Typography className={classes.title} variant="h5" component="h2">
          <Spinner/>
        </Typography>

      </CardContent>
    </Card>
  );
};

export default LoadingCard;
