import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import PostAddIcon from '@material-ui/icons/PostAdd';
import ImageIcon from '@material-ui/icons/Image';
import ClearIcon from '@material-ui/icons/Clear';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { useHistory } from 'react-router-dom';
import {
  InputWrap,
  ButtonGroup,
  DownloadInput,
} from '../../UI/StyledComponent/Templates';
import {
  ImagesWraper,
  ImagesBlock,
  Image
} from '../../UI/StyledComponent/Image';
import { deleteButton } from '../../UI/StyledComponent/Button';
import { createPost } from '../../../store/post/actions';
import { validatorPost } from '../../../config/validatorForm';
import Spinner from '../../UI/Spinner';

const validator = Yup.object({
  content: validatorPost.content
});

const CreatePostForm = ({ isLoading }) => {

  const classes = deleteButton();
  const dispatch = useDispatch();
  const history = useHistory();
  const [images, setImage] = useState([]);

  const fileSelectedHandle = (event) => {

    const file = event.target.files[0];
    file.id = new Date();

    setImage([...images, file]);
  };

  const post = useFormik({

    initialValues: {
      content: ''
    },

    validationSchema: validator,
    onSubmit: ({ content }) => {
      
      const formData = new FormData();
      formData.append('content', content);

      if (images) {
        images.map((image) => formData.append('images[]', image));
      }

      dispatch(createPost(formData))
        .then((successAction) => history.push(`/post/${successAction.response.data.post.id}`))
        .catch((errorOrAbortAction) => console.log('error'));
    }
  });

  const deleteImage = (image) => { 
    setImage(images.filter(item => item.id!==image.id));
  }

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
            {images.map((image, index) => 
            <ImagesBlock key={index}>
              <IconButton className={classes.deleteButton} onClick={() => deleteImage(image)} color="secondary" aria-label="delete">
                <ClearIcon fontSize="small"/>
              </IconButton>
              <Image src={URL.createObjectURL(image)}/>
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
