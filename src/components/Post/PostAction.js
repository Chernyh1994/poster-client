import React from 'react';
import CardActions from '@material-ui/core/CardActions';

import CreateCommentModal from '../UI/CreateComment/CreateCommentModal';
import LikeButton from '../UI/Like/LikeButton';
import { WrapperButton } from '../UI/StyledComponent/Templates';

const PostAction = ({ post, commentCount, likesCount }) => (
  <CardActions>
    <WrapperButton>
      <CreateCommentModal
        postId={post.id}
        commentCount={commentCount}
      />
      <LikeButton likesCount={likesCount} post={post}/>
    </WrapperButton>
  </CardActions>
);

export default PostAction;
