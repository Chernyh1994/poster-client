/* eslint-disable import/no-cycle */
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardActions from '@material-ui/core/CardActions';
import { Link } from 'react-router-dom';

import CommentActions from './CommentActions';
import { StyledCommentCard } from '../styledComponent/Card';
import { startAvatar } from '../styledComponent/Templates';

const CommentCard = ({ comment, postId }) => {
  const classes = StyledCommentCard();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            component={Link}
            to={`/profile/${comment.author.id}`}
            aria-label="recipe"
            src={comment.author.images ?
              comment.author.images.path :
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
      { !comment.parent_id ?
        <CardActions disableSpacing>
          <CommentActions postId={postId} parentId={comment.id} comment={comment} />
        </CardActions> :
        <div></div> }
    </Card>
  );
};

export default CommentCard;
