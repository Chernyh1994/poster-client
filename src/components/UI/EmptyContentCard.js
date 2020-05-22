import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { StyledCard } from '../styledComponent/Card';

const EmptyContentCard = ({ postId }) => {
  const classes = StyledCard();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} variant="h5" component="h2">
            Content is empty.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default EmptyContentCard;
