/* eslint-disable import/no-cycle */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardActions from '@material-ui/core/CardActions';

import CommentButton from './CommentButton';
import { StyledCommentCard } from '../styledComponent/Card';

const CommentsCard = ({ comments, postId }) => {
  const classes = StyledCommentCard();

  return (
    comments.map((comment, index) => (
      <Card className={classes.root} key={index} >
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" src={`http://localhost:8000/storage/${comment.author.avatar_path}`} className={classes.avatar}/>
          }
          title={comment.author.name}
          subheader={comment.created_at}
        />
        <CardContent>

          <Typography variant="body2" component="p">
            {comment.description}
          </Typography>

        </CardContent>
        <CardActions disableSpacing>
          <CommentButton postId={postId} commentId={comment.id} />
        </CardActions>
      </Card>
    ))
  );
};

export default CommentsCard;
