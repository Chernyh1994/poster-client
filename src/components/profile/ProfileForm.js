import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { updateUser } from '../../store/currentUser/actions';
import { validatorForm } from '../../config/validatorForm';
import {
  ProfileWrap,
  UserInfoWrap,
  AvatarWrap,
  NewAvatar
} from '../styledComponent/ProfileStyled';
import {
  DownloadInput,
  InputWrap,
  startAvatar
} from '../styledComponent/Templates';

const validator = Yup.object({
  name: validatorForm.name,
  email: validatorForm.email,
});

const ProfileForm = ({ handleClose }) => {
  const { user } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const [avatar, setAvatar] = useState(null);
  let userAvatar = startAvatar;
  if (user.images) {
    userAvatar = user.avatar.path;
  }
  const [imagePreviewUrl, setImagePreviewUrl] = useState(userAvatar);

  const fileSelectedHandle = (event) => {
    const files = event.target.files[0];
    const objectURL = URL.createObjectURL(files);

    setImagePreviewUrl(objectURL);
    setAvatar(files);
  };

  const userProfile = useFormik({
    initialValues: {
      name: user.name,
      email: user.email
    },
    validationSchema: validator,
    onSubmit: (parameter) => {
      const formData = new FormData();
      formData.append('name', parameter.name);
      formData.append('email', parameter.email);
      formData.append('_method', 'put');
      if (!!avatar) {
        formData.append('avatar', avatar, avatar.name);
      }
      dispatch(updateUser(formData))
        .then((successAction) => handleClose())
        .catch((errorOrAbortAction) => console.log('error'));
    }
  });

  return (
    <form onSubmit={userProfile.handleSubmit}>
      <ProfileWrap>

        <AvatarWrap>
          <Button color="primary" component="label">
            <NewAvatar alt="avatar" src={imagePreviewUrl}/>
            <DownloadInput
              name="avatar"
              type="file"
              accept="image/*"
              onChange={fileSelectedHandle}
            />
          </Button>
        </AvatarWrap>

        <UserInfoWrap>
          <InputWrap>
            <TextField
              fullWidth
              label="Name*"
              name="Lary"
              variant="outlined"
              {...userProfile.getFieldProps('name')}
              error={!!userProfile.touched.name && !!userProfile.errors.name }
              helperText={userProfile.touched.name && userProfile.errors.name ? userProfile.errors.name : null}
            />
          </InputWrap>

          <InputWrap>
            <TextField
              fullWidth
              label="Email*"
              name="email"
              variant="outlined"
              {...userProfile.getFieldProps('email')}
              error={!!userProfile.touched.email && !!userProfile.errors.email }
              helperText={userProfile.touched.email && userProfile.errors.email ? userProfile.errors.email : null}
            />
          </InputWrap>

          <Button type="submit" color="primary" variant="outlined" fullWidth>
            Update Profile
          </Button>
        </UserInfoWrap>

      </ProfileWrap>
    </form>
  );
};

export default ProfileForm;
