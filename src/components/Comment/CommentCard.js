import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardActions from '@material-ui/core/CardActions';
import { Link } from 'react-router-dom';

import CommentActions from './CommentActions';
import { StyledCommentCard } from '../UI/StyledComponent/Card';
import { startAvatar } from '../UI/StyledComponent/Image';

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
            src={comment.author.profile ?
              comment.author.profile.avatar_path :
              startAvatar}
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
      {!comment.parent_id ?
        <CardActions disableSpacing>
          <CommentActions
            postId={postId}
            parentId={comment.id}
            subcomments={comment.subcomments}
            commentCount={comment.subcomments_count}
          />
        </CardActions> : null}
    </Card>
  );
};

export default CommentCard;
