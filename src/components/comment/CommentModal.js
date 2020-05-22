import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import FavoriteIcon from '@material-ui/icons/Favorite';

import CreateCommentForm from './CreateCommentForm';
import LoginForm from '../auth/LoginForm';
import { WrapperButton, ContentButton } from '../styledComponent/Templates';

const CommentModal = ({postId, parentId, commentCount, likesCount}) => {
  const [open, setOpen] = React.useState(false);
  const user = useSelector((state) => state.currentAuthUser.auth.user);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLike = () => {
  }

  return (
    <WrapperButton>
      <WrapperButton>
        <IconButton onClick={handleClickOpen} aria-label="share">
          <CommentIcon fontSize='small'/>
        </IconButton>
        <ContentButton>
          {commentCount}
        </ContentButton>
      </WrapperButton>

      <WrapperButton>
        <IconButton aria-label="share" onClick={handleLike}>
          <FavoriteIcon fontSize='small'/>
        </IconButton>
        <ContentButton>
          {likesCount}
        </ContentButton>
      </WrapperButton>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{user ? 'Comment' : 'Login'} </DialogTitle>
        <DialogContent>
          {user ?
            <CreateCommentForm parentId={parentId} postId={postId} handleClose={handleClose}/> :
            <LoginForm/>}
        </DialogContent>
      </Dialog>
    </WrapperButton>
  );
};

export default CommentModal;
