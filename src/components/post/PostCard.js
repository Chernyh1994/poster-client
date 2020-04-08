import React from 'react';
import { useSelector } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';

import { StyledCard } from '../styledComponent/Card';
import { LinkTemplate } from '../styledComponent/Link';
import CommentModal from '../comment/CommentModal';

const PostCard = () => {
  const classes = StyledCard();

  const { postList } = useSelector(state => state.postReducer);

  return (
    postList.map((post, index) => (    
      <Card className={classes.root} key={index}>
        <LinkTemplate to={`/about/${post.id}`}>
          <CardActionArea>
            <CardHeader
            title={post.title}
            subheader={post.user.name}
            />
            <CardContent>

            <Typography variant="body2" color="textSecondary" component="p">
                {post.description}
            </Typography>

            </CardContent>
          </CardActionArea>
        </LinkTemplate>
          <CardActions disableSpacing>
            <CommentModal postId={post.id} />
          </CardActions>
      </Card>
    ))
  )
};

export default PostCard;