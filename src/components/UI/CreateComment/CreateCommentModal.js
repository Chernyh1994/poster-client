import React from 'react';
import { useSelector } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import CreateCommentForm from './CreateCommentForm';
import LoginForm from '../../Auth/Login/Login';
import CreateCommentButton from './CreateCommentButton';

const CreateCommentModal = (
  {
    postId,
    parentId,
    commentCount
  }) => {
  const [open, setOpen] = React.useState(false);
  const isAuthorized = useSelector((state) => state.currentAuthUser.auth.user);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <CreateCommentButton commentCount={commentCount} handleClickOpen={handleClickOpen}/>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{isAuthorized ? 'Comment' : 'Login'}</DialogTitle>
        <DialogContent>
          {isAuthorized ?
            <CreateCommentForm
              parentId={parentId}
              postId={postId}
              handleClose={handleClose}
            /> :
            <LoginForm/>}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateCommentModal;
