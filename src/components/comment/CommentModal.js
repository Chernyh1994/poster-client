import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PostAddIcon from '@material-ui/icons/PostAdd';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { CustomBlock } from '../styledComponent/Templates';
import { createComment } from '../../store/actions/commentActions';

const validator = Yup.object({
  description: Yup.string()
      .min(1, 'description must be longer than 1 characters')
      .max(1000, 'description should be shorter than 1000 characters')
      .required('Required'),
});

const CommentModal = () => {
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();
  const { user } = useSelector(state => state.authReducer);

  const comment = useFormik({
      initialValues: {
          // description:'',
          // author_id: '',
          // post_id: ''
      },
      validationSchema: validator,
      onSubmit: ( description, author_id, post_id) => {
          dispatch(createComment( description, author_id, post_id));
      },
  });

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
        <DialogTitle id="form-dialog-title">Comment</DialogTitle>
        <DialogContent>
          <form onSubmit={comment.handleSubmit}>

            <CustomBlock>
                <TextField
                    fullWidth
                    label="Description*"
                    name="description"
                    placeholder="Placeholder"
                    multiline
                    {...comment.getFieldProps('description')}
                    error={!!comment.touched.description && !!comment.errors.description }
                    helperText={comment.touched.description && comment.errors.description ? comment.errors.description: null}
                />
            </CustomBlock>

            <CustomBlock>
                <Button color="primary" fullWidth type="submit" startIcon={<PostAddIcon fontSize="small" />} >
                    Send
                </Button>
            </CustomBlock>

          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CommentModal;