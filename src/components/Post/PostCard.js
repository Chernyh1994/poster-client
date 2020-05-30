import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Iframe from 'react-iframe';

import { StyledCard } from '../UI/StyledComponent/Card';
import PostAction from './PostAction';
import {
  ImagesWraper,
  ImagesBlock,
  Image,
  startAvatar
} from '../UI/StyledComponent/Image';

const PostCard = ({ post }) => {
  const classes = StyledCard();
  const isAuthorized = useSelector((state) => state.currentAuthUser.auth.user);

  return (
    <Card className={classes.root} >
      <CardHeader
        avatar={
          <Avatar
            component={Link}
            to={`/profile/${post.author.id}`}
            aria-label="recipe"
            src={post.author.profile ?
              post.author.profile.avatar_path :
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

          <ImagesWraper>
            {post.images.map((image, id) => (
              <ImagesBlock key={id}>
                <Image src={image.path}/>
              </ImagesBlock>
            ))}
          </ImagesWraper>

        </CardContent>
      </CardActionArea>
      <PostAction
        post={post}
        commentCount={post.comments_count}
        likesCount={post.likes_count}
      />
    </Card>
  );
};

export default PostCard;
