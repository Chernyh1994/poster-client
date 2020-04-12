/* eslint-disable import/no-cycle */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import CommentButton from './CommentButton';
import { StyledCommentCard } from '../styledComponent/Card';

const CommentsCard = ({ comments, postId }) => {
  const classes = StyledCommentCard();

  return (
    comments.map((comment, index) => (
      <Card className={classes.root} key={index}>

        <CardContent>

          <Typography variant="body2" component="p">
            {comment.description}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
            {comment.created_at}
          </Typography>
        </CardContent>
        <CommentButton parentId={comment.id} postId={postId} commentId={comment.id} />
      </Card>
    ))
  );
};

export default CommentsCard;
