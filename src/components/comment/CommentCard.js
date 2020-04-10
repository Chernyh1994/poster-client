/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useSelector } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import SubCommentButton from './SubCommentButton';
import { StyledCommentCard } from '../styledComponent/Card';

const CommentCard = () => {
  const classes = StyledCommentCard();
  const { commentList } = useSelector((state) => state.commentReducer);

  return (
    commentList.map((comment, index) => (
      <Card className={classes.root} key={index}>

        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {comment.user.name}
          </Typography>

          <Typography variant="body2" component="p">
            {comment.description}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
            {comment.created_at}
          </Typography>
        </CardContent>
        <SubCommentButton parentId={comment.id}/>
      </Card>
    ))
  );
};

export default CommentCard;
