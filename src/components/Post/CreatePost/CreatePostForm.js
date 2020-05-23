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
  ImagesWraper,
  ImagesBlock,
  Image
} from '../../UI/StyledComponent/Templates';
import { createPost } from '../../../store/post/actions';
import { validatorPost } from '../../../config/validatorForm';
import Spinner from '../../UI/Spinner';

const validator = Yup.object({
  content: validatorPost.content
});

const CreatePostForm = ({ isLoading }) => {

  const dispatch = useDispatch();
  const history = useHistory();

  const [file, setFile] = useState([]);
  const [imagePreviewUrl, setImagePreviewUrl] = useState([]);

  const fileSelectedHandle = (event) => {

    const files = event.target.files[0];
    const objectURL = URL.createObjectURL(files);

    setImagePreviewUrl([...imagePreviewUrl, objectURL]);
    setFile([...file, files]);
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
        .then((successAction) => history.push(`/post/${successAction.response.data.post.id}`))
        .catch((errorOrAbortAction) => console.log('error'));
    }
  });

  return (
    <form onSubmit={post.handleSubmit}>
      {isLoading ?
        <Spinner/> 
        :
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

          <ImagesWraper>
            {imagePreviewUrl.map((image, index) => <ImagesBlock key={index}>
              <Image src={image}/>
            </ImagesBlock>)}
          </ImagesWraper>
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
