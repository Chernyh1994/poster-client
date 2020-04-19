import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { StyledCommentCard } from '../styledComponent/Card';

const CommentEmpty = () => {
  const classes = StyledCommentCard();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p"> No comment.</Typography>
      </CardContent>
    </Card>
  );
};

export default CommentEmpty;
