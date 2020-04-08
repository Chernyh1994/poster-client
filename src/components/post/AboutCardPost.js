import React from 'react';
import { useSelector } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import * as moment from 'moment';

import CommentModal from '../comment/CommentModal';
import { StyledCard } from '../styledComponent/Card';

const AboutCardPost = () => {
    const classes = StyledCard();
  
    const { post } = useSelector(state => state.postReducer);
    const getPost = post['0'];

  return (
    <Card className={classes.root} >
      <CardContent>

        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {moment().startOf(getPost.created_at).fromNow()}
        </Typography>

        <Typography variant="h5" component="h2">
          {getPost.title}
        </Typography>
        
        <Typography className={classes.pos} color="textSecondary">
          {getPost.user.name}
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
            {getPost.description}
        </Typography>

        </CardContent>
        <CardActions disableSpacing>
          <CommentModal postId={getPost.id} />
      </CardActions>
  </Card>
  )
};

export default AboutCardPost;