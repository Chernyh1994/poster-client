import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Iframe from 'react-iframe';

import { StyledCard } from '../styledComponent/Card';
import CommentModal from '../comment/CommentModal';
import {
  ImagesBlock,
  Image,
  startAvatar
} from '../styledComponent/Templates';

const PostCard = ({ post }) => {
  const classes = StyledCard();
  const isAuthorized = useSelector((state) => state.authReducer.user);

  return (
    <Card className={classes.root} >
      <CardHeader
        avatar={
          <Avatar
            component={Link}
            to={`/profile/${post.author.id}`}
            aria-label="recipe"
            src={post.author.images ?
              post.author.images.path :
              startAvatar}
            className={classes.avatar}
          />
        }
        title={post.author.name}
        subheader={post.created_at}
      />

      <CardActionArea
        component={Link}
        to={isAuthorized ? `/post/${post.id}` : '/login'}
      >
        <CardContent>
          <Typography variant="body2" component="p">
            {post.content}
          </Typography>
          {post.video ?
            <Iframe url={post.video.url}
              width="350px"
              height="350px"
              id="myId"
              className="myClassname"
              display="initial"
              position="relative"
            /> : null}

          {post.images.map((image, id) => (
            <ImagesBlock key={id}>
              <Image src={image.path}/>
            </ImagesBlock>
          ))}
        </CardContent>
      </CardActionArea>

      <CardActions>
        <CommentModal postId={post.id} commentCount={post.comments_count} likesCount={post.likes_count}/>
      </CardActions>
    </Card>
  );
};

export default PostCard;
