import React from 'react';
import CardActions from '@material-ui/core/CardActions';

import CreateCommentModal from '../UI/CreateComment/CreateCommentModal';
import LikeButton from '../UI/Like/LikeButton';
import { WrapperButton } from '../UI/StyledComponent/Templates';

const PostAction = ({ postId, commentCount, likesCount }) => (
  <CardActions>
    <WrapperButton>
      <CreateCommentModal
        postId={postId}
        commentCount={commentCount}
      />
      <LikeButton likesCount={likesCount}/>
    </WrapperButton>
  </CardActions>
);

export default PostAction;
