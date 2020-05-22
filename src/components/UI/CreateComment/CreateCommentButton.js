import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';

import { WrapperButton, ContentButton } from '../StyledComponent/Templates';

const CreateCommentButton = ({ handleClickOpen, commentCount }) => (
  <WrapperButton>
    <IconButton onClick={handleClickOpen} aria-label="share">
      <CommentIcon fontSize='small'/>
    </IconButton>
    <ContentButton>
      {commentCount}
    </ContentButton>
  </WrapperButton>
);

export default CreateCommentButton;
