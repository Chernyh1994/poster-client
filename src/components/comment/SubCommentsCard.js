import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardActions from '@material-ui/core/CardActions';

import { StyledCommentCard } from '../styledComponent/Card';

const SubCommentsCard = ({ subComments }) => {
  const classes = StyledCommentCard();

  return (
    subComments.map((subComment, index) => (
      <Card className={classes.root} key={index} >
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" src={`http://localhost:8000/storage/${subComment.author.avatar_path}`} className={classes.avatar}/>
          }
          title={subComment.author.name}
          subheader={subComment.created_at}
        />
        <CardContent>

          <Typography variant="body2" component="p">
            {subComment.description}
          </Typography>

        </CardContent>
        <CardActions disableSpacing>
        </CardActions>
      </Card>
    ))
  );
};

export default SubCommentsCard;
