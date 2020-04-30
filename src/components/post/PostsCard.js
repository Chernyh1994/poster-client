import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

import { StyledCard } from '../styledComponent/Card';
import CommentModal from '../comment/CommentModal';
import {
  ImagesBlock,
  Image,
  startAvatar
} from '../styledComponent/Templates';

const PostsCard = ({ posts }) => {
  const classes = StyledCard();

  

  return (
    // posts.map((post, index) => (
    //   <Card className={classes.root} key={index} >
    //     <CardHeader
    //       avatar={
    //         <Avatar
    //           component={Link}
    //           to={`/profile/${post.author.id}`}
    //           aria-label="recipe"
    //           src={post.author.avatar_path ?
    //             `http://localhost:8000/storage/${post.author.avatar_path}` :
    //             startAvatar }
    //           className={classes.avatar}
    //         />
    //       }
    //       title={post.author.name}
    //       subheader={post.created_at}
    //     />
    //     <CardActionArea
    //       component={Link}
    //       to={`/post/${post.id}`}
    //     >

    //       <CardContent>

    //         <Typography variant="body2" component="p">
    //           {post.content}
    //         </Typography>

    //         {post.images.map((image, id) => (
    //           <ImagesBlock key={id}>
    //             <Image src={`http://localhost:8000/storage/${image.path}`}/>
    //           </ImagesBlock>
    //         ))}

    //       </CardContent>
    //     </CardActionArea>

    //     <CardActions disableSpacing>
    //       <CommentModal postId={post.id} />
    //     </CardActions>
    //   </Card>
    // ))
    <div>Posts</div>
  );
};

export default PostsCard;
