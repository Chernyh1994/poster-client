import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { userUpdate } from '../../store/actions/authAction';

import {
  ProfileWrap,
  UserInfoWrap,
  AvatarWrap,
  NewAvatar
} from '../styledComponent/ProfileStyled';
import {
  DownloadInput,
  InputWrap
} from '../styledComponent/Templates';

const validator = Yup.object({
  name: Yup.string()
    .min(4, 'User Name must be longer')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Required')
});

const ProfileForm = () => {
  const { user } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const startAvatar = 'https://www.mattmovingsystems.com/root/images/profile_user.gif';
  const [avatar, setAvatar] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(startAvatar);

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
      if (!!avatar) {
        formData.append('avatar', avatar, avatar.name);
      }
      dispatch(userUpdate(formData));
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
