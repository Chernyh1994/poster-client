import React from 'react';
import { useSelector } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';

const AboutCardPost = () => {
  
    const { post } = useSelector(state => state.postReducer);
    const getPost = post['0']

  return (
    <Card>
        <CardHeader
        title={getPost.title}
        subheader={getPost.user.name}
        />
        <CardContent>

        <Typography variant="body2" color="textSecondary" component="p">
            {getPost.description}
        </Typography>

        </CardContent>
        <CardActions disableSpacing>
        <IconButton aria-label="share">
            <CommentIcon />
        </IconButton>
      </CardActions>
  </Card>
  )
};

export default AboutCardPost;