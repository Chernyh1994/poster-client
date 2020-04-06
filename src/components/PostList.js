import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ReplayIcon from '@material-ui/icons/Replay';

import { getPosts } from '../store/actions/postAction';
import { PostCard } from './styledComponent/PostCard';
import Spinner from './Spinner';


const PostList = () => {
  const classes = PostCard();

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getPosts()); 
  },[dispatch]);

  const { postList, isLoding } = useSelector(state => state.postReducer);

  const getPostList = () => {
    dispatch(getPosts()); 
  }

  if(isLoding){
    return (
      <Card className={classes.root}>
        <CardContent>

          <Typography className={classes.title} variant="h5" component="h2">
            <Spinner/>
          </Typography>

        </CardContent>
      </Card>
    )
  }

  return (
    postList && postList.length ?
      postList.map((post, index) => (    
        <Card className={classes.root} key={index}>
          <CardHeader
            title={post.title}
            subheader={post.user.name}
          />
          <CardContent>

            <Typography variant="body2" color="textSecondary" component="p">
              {post.description}
            </Typography>

          </CardContent>
          <CardActions disableSpacing>
          </CardActions>
        </Card>
      ))
      :
      <Card className={classes.root}>
        <CardContent>

          <Typography className={classes.title} variant="h5" component="h2">
            Post List is empty.
          </Typography>

        </CardContent>

        <CardActions disableSpacing>
          <Button onClick={getPostList} color="primary" fullWidth type="submit" startIcon={<ReplayIcon fontSize="small" />} >
            Try again
          </Button>
        </CardActions>
      </Card>
  )
};

export default PostList;