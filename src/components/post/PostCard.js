import React from 'react';
import { useSelector } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

import CommentModal from '../comment/CommentModal';
import { StyledCard } from '../styledComponent/Card';
import CommentsCard from '../comment/CommentsCard';
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
        <CardContent>

          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {post.created_at}
          </Typography>

          <Typography className={classes.pos} color="textSecondary">
            {post.author.name}
          </Typography>

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

      <CommentsCard comments={post.comments} postId={post.id} />
    </div>
  );
};

export default PostCard;
