/* eslint-disable import/named */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PostAddIcon from '@material-ui/icons/PostAdd';
import ImageIcon from '@material-ui/icons/Image';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { useHistory } from 'react-router-dom';
import {
  InputWrap,
  ButtonGroup,
  DownloadInput,
  ImagesBlock,
  Image
} from '../styledComponent/Templates';
import { createPost } from '../../store/actions/postAction';
import { validatorPost } from '../../config/validatorForm';
import Spinner from '../Spinner';

const validator = Yup.object({
  content: validatorPost.content
});

const CreatePostForm = ({ isLoading }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);

  const fileSelectedHandle = (event) => {
    const files = event.target.files[0];
    const objectURL = URL.createObjectURL(files);
    setImagePreviewUrl(objectURL);
    setFile(files);
  };

  const post = useFormik({
    initialValues: {
      content: ''
    },
    validationSchema: validator,
    onSubmit: ({ content }) => {
      const formData = new FormData();
      formData.append('content', content);
      if (file) {
        formData.append('images', file, file.name);
      }

      dispatch(createPost(formData))
        .then((successAction) => history.push('/posts'))
        .catch((errorOrAbortAction) => console.log('error'));
    }
  });

  return (
    <form onSubmit={post.handleSubmit}>
      {isLoading ?
        <Spinner/> :
        <div>
          <InputWrap>
            <TextField
              fullWidth
              label="What's happening?"
              name="content"
              {...post.getFieldProps('content')}
              error={!!post.touched.content && !!post.errors.content }
              helperText={post.touched.content && post.errors.content ? post.errors.content : null}
            />
          </InputWrap>

          <ImagesBlock>
            <div>
              <Image src={imagePreviewUrl}/>
            </div>
          </ImagesBlock>
        </div>}

      <ButtonGroup>
        <Button color="primary" component="label" startIcon={<ImageIcon fontSize="small" />} >
          <DownloadInput
            name="images"
            type="file"
            accept="image/*"
            onChange={fileSelectedHandle}
          />
        </Button>
        <Button color="primary" type="submit" startIcon={<PostAddIcon fontSize="small" />} >
          Send
        </Button>
      </ButtonGroup>

    </form>
  );
};

export default CreatePostForm;
