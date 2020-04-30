/* eslint-disable react/prop-types */
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

import CommentModal from '../comment/CommentModal';
import { StyledCard } from '../styledComponent/Card';
import Comments from '../comment/Comments';
import {
  ImagesBlock,
  Image,
  startAvatar
} from '../styledComponent/Templates';

const PostCard = ({ post }) => {
  const classes = StyledCard();
  console.log(post)

  return (
    <div>
      <Card className={classes.root} >
        <CardHeader
          avatar={
            <Avatar
              component={Link}
              to={`/profile/${post.author.id}`}
              aria-label="recipe"
              src={post.author.avatar_path ?
                `http://localhost:8000/storage/${post.author.avatar_path}` :
                startAvatar}
              className={classes.avatar}
            />
          }
          title={post.author.name}
          subheader={post.created_at}
        />
        <CardContent>

          <Typography variant="body2" component="p">
            {post.content}
          </Typography>

          { post.images.map((image, id) => (
            <ImagesBlock key={id}>
              <Image
                src={`http://localhost:8000/storage/${image.path}`}/>
            </ImagesBlock>
          ))}

        </CardContent>
        <CardActions disableSpacing>
          <CommentModal postId={post.id} />
        </CardActions>
      </Card>

      <Comments postId={post.id} />
    </div>
  );
};

export default PostCard;
