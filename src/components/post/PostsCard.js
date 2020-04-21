import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

import { StyledCard } from '../styledComponent/Card';
import { LinkTemplate } from '../styledComponent/Link';
import CommentModal from '../comment/CommentModal';
import {
  ImagesBlock,
  Image
} from '../styledComponent/Templates';

const PostsCard = ({ posts }) => {
  const classes = StyledCard();
  const startAvatar = 'https://www.mattmovingsystems.com/root/images/profile_user.gif';

  return (
    posts.map((post, index) => (
      <Card className={classes.root} key={index}>
        <LinkTemplate to={`/post/${post.id}`}>
          <CardActionArea>
            <CardHeader
              avatar={
                <Avatar
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
        </LinkTemplate>

        <CardActions disableSpacing>
          <CommentModal postId={post.id} />
        </CardActions>
      </Card>
    ))
  );
};

export default PostsCard;
