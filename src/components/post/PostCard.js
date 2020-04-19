import React from 'react';
import { useSelector } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

import CommentModal from '../comment/CommentModal';
import { StyledCard } from '../styledComponent/Card';
import Comments from '../comment/Comments';
import {
  ImagesBlock,
  Image
} from '../styledComponent/Templates';

const PostCard = () => {
  const classes = StyledCard();

  const post = useSelector((state) => state.postReducer.post);

  return (
    <div>
      <Card className={classes.root} >
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" src={`http://localhost:8000/storage/${post.author.avatar_path}`} className={classes.avatar}/>
          }
          title={post.author.name}
          subheader={post.created_at}
        />
        <CardContent>

          <Typography variant="body2" component="p">
            {post.description}
          </Typography>

          { post.images.map((image, id) => (
            <ImagesBlock key={id}>
              <Image src={`http://localhost:8000/storage/${image.path}`}/>
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
