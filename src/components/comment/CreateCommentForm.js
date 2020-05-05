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
  content: Yup.string()
    .min(1, 'content must be longer than 1 characters')
    .max(1000, 'content should be shorter than 1000 characters')
    .required('Required')
});

// eslint-disable-next-line react/prop-types
const CreateCommentForm = ({ parentId, postId, handleClose }) => {
  const dispatch = useDispatch();

  const comment = useFormik({
    initialValues: {
      content: ''
    },
    validationSchema: validator,
    onSubmit: ({ content }) => {
      dispatch(createComment(content, parentId, postId))
      .then(successAction =>  handleClose())
      .catch(errorOrAbortAction => console.log('error'));
    }
  });

  return (
    <form onSubmit={comment.handleSubmit}>

      <InputWrap>
        <TextField
          fullWidth
          label="content*"
          name="content"
          placeholder="Placeholder"
          multiline
          {...comment.getFieldProps('content')}
          error={!!comment.touched.content && !!comment.errors.content }
          // eslint-disable-next-line max-len
          helperText={comment.touched.content && comment.errors.content ? comment.errors.content : null}
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
