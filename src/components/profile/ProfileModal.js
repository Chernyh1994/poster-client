/* eslint-disable import/no-cycle */
import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import ProfileForm from './ProfileForm';

const ProfileModal = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen} color="primary" variant="outlined" fullWidth>
        Set up Profile
      </Button>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title"> </DialogTitle>
        <DialogContent>
          <ProfileForm/>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProfileModal;
