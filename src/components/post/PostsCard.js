import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

import { StyledCard } from '../styledComponent/Card';
import { LinkNavigation, startAvatar } from '../styledComponent/Link';
import CommentModal from '../comment/CommentModal';
import {
  ImagesBlock,
  Image
} from '../styledComponent/Templates';

const PostsCard = ({ posts }) => {
  const classes = StyledCard();

  return (
    posts.map((post, index) => (
      <Card className={classes.root} key={index} >
        <CardHeader
          avatar={
            <Avatar
              component={LinkNavigation}
              to={`/${post.author.name}`}
              aria-label="recipe"
              src={post.author.avatar_path ?
                `http://localhost:8000/storage/${post.author.avatar_path}` :
                startAvatar }
              className={classes.avatar}
            />
          }
          title={post.author.name}
          subheader={post.created_at}
        />
        <CardActionArea
          component={LinkNavigation}
          to={`/post/${post.id}`}
        >

          <CardContent>

            <Typography variant="body2" component="p">
              {post.description}
            </Typography>

            {post.images.map((image, id) => (
              <ImagesBlock key={id}>
                <Image src={`http://localhost:8000/storage/${image.path}`}/>
              </ImagesBlock>
            ))}

          </CardContent>
        </CardActionArea>

        <CardActions disableSpacing>
          <CommentModal postId={post.id} />
        </CardActions>
      </Card>
    ))
  );
};

export default PostsCard;
