/* eslint-disable camelcase */
import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { InputWrap } from '../styledComponent/Templates';
import { createComment } from '../../store/actions/commentAction';

const validator = Yup.object({
  description: Yup.string()
    .min(1, 'description must be longer than 1 characters')
    .max(1000, 'description should be shorter than 1000 characters')
    .required('Required')
});

// eslint-disable-next-line react/prop-types
const CreateCommentForm = ({ parentId, postId, handleClose }) => {
  const dispatch = useDispatch();

  const comment = useFormik({
    initialValues: {
      description: '',
      parent_id: parentId
    },
    validationSchema: validator,
    onSubmit: (description, parent_id) => {
      dispatch(createComment(description, parent_id, postId, handleClose));
    }
  });

  return (
    <form onSubmit={comment.handleSubmit}>

      <InputWrap>
        <TextField
          fullWidth
          label="Description*"
          name="description"
          placeholder="Placeholder"
          multiline
          {...comment.getFieldProps('description')}
          error={!!comment.touched.description && !!comment.errors.description }
          // eslint-disable-next-line max-len
          helperText={comment.touched.description && comment.errors.description ? comment.errors.description : null}
        />
      </InputWrap>

      <InputWrap>
        <Button color="primary" fullWidth type="submit" startIcon={<PostAddIcon fontSize="small" />} >
            Send
        </Button>
      </InputWrap>

    </form>

  );
};

export default CreateCommentForm;
