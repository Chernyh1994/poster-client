/* eslint-disable import/no-cycle */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardActions from '@material-ui/core/CardActions';
import { Link } from 'react-router-dom';

import CommentButton from './CommentButton';
import { StyledCommentCard } from '../styledComponent/Card';
import { startAvatar } from '../styledComponent/Templates';

const CommentsCard = ({ comment, postId }) => {
  const classes = StyledCommentCard();

  return (
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar
              component={Link}
              to={`/profile/${comment.author.id}`}
              aria-label="recipe"
              src={comment.author.avatar_path ?
                `http://localhost:8000/storage/${comment.author.avatar_path}` :
                startAvatar }
              className={classes.avatar}/>
          }
          title={comment.author.name}
          subheader={comment.created_at}
        />
        <CardContent>

          <Typography variant="body2" component="p">
            {comment.content}
          </Typography>

        </CardContent>
        <CardActions disableSpacing>
          <CommentButton postId={postId} commentId={comment.id} />
        </CardActions>
      </Card>
  );
};

export default CommentsCard;
