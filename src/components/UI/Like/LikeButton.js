import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { WrapperButton, ContentButton } from '../StyledComponent/Templates';

const LikeButton = ({ postId, commentId, likesCount }) => (
  <WrapperButton>
    <IconButton aria-label="share">
      <FavoriteIcon fontSize='small'/>
    </IconButton>
    <ContentButton>
      {likesCount}
    </ContentButton>
  </WrapperButton>
);

export default LikeButton;
