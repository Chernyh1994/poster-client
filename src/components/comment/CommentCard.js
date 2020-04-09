/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';

import CommentModal from './CommentModal';
import SubCommentButton from './SubCommentButton';
import SubCommentContent from './SumCommentContent';
import { StyledCommentCard } from '../styledComponent/Card';

const CommentCard = () => {
  const classes = StyledCommentCard();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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

        <CardActions disableSpacing>
          <CommentModal parentId={comment.id}/>
          <SubCommentButton handleExpandClick={ handleExpandClick } expanded={expanded}/>
        </CardActions>

        <SubCommentContent expanded={expanded}/>

      </Card>
    ))
  );
};

export default CommentCard;
