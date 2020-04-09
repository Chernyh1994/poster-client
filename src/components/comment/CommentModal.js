/* eslint-disable operator-linebreak */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';

import PostCommentingForm from './PostCommentingForm';
import CommentCommentingForm from './CommentCommentingForm';
import LoginForm from '../LoginForm';

const CommentModal = ({ postId, parentId }) => {
  const [open, setOpen] = React.useState(false);
  const { user } = useSelector((state) => state.authReducer);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>

      <IconButton onClick={handleClickOpen} aria-label="share">
        <CommentIcon />
      </IconButton>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{user ? 'Comment' : 'Login'} </DialogTitle>
        <DialogContent>
          {user ?

            postId ?
              <PostCommentingForm postId={postId}/>
              :
              <CommentCommentingForm parentId={parentId}/>
            :
            <LoginForm/>}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CommentModal;
