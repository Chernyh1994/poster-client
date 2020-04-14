import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PostAddIcon from '@material-ui/icons/PostAdd';
import ImageIcon from '@material-ui/icons/Image';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import {
  CustomBlock,
  ButtonGroup,
  DownloadInput,
  ImagesBlock,
  Image
} from '../styledComponent/Templates';
import { createPost } from '../../store/actions/postAction';

const validator = Yup.object({
  description: Yup.string()
    .min(1, 'description must be longer than 1 characters')
    .max(2000, 'description should be shorter than 2000 characters')
    .required('Required')
});

const CreatePostForm = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);

  const fileSelectedHandle = (event) => {
    const files = event.target.files[0];
    const reader = new FileReader();

    setFile(files);

    reader.onload = () => {
      setImagePreviewUrl(reader.result);
    };

    reader.readAsDataURL(files);
  };

  const post = useFormik({
    initialValues: {
      description: ''
    },
    validationSchema: validator,
    onSubmit: (parameter) => {
      const formData = new FormData();
      formData.append('description', parameter.description);
      if (!!file) {
        formData.append('images', file, file.name);
      }
      dispatch(createPost(formData));
    }
  });

  return (
    <form onSubmit={post.handleSubmit}>

      <CustomBlock>
        <TextField
          fullWidth
          label="What's happening?"
          name="description"
          {...post.getFieldProps('description')}
          error={!!post.touched.description && !!post.errors.description }
          helperText={post.touched.description && post.errors.description ? post.errors.description : null}
        />
      </CustomBlock>

      <ImagesBlock>
        <div><Image src={imagePreviewUrl}/></div>
      </ImagesBlock>

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
