import React from 'react';
import { useSelector } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';

import { StyledCommentCard } from '../styledComponent/Card';

const CommentCard = () => {
  const classes = StyledCommentCard();

  const { commentList } = useSelector((state) => state.commentReducer);

  return (
    commentList.map((comment, index) => (
      <Card className={classes.root} key={index}>
        <CardActionArea>
          <CardContent>

            <Typography variant="body2" component="p">
              {comment.description}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              {comment.user.name}
            </Typography>

          </CardContent>
        </CardActionArea>
      </Card>
    ))
  );
};

export default CommentCard;
