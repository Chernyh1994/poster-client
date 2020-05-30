import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { updateUser } from '../../../../store/currentAuthUser/actions';
import { validatorForm } from '../../../../config/validatorForm';
import {
  ProfileWrap,
  UserInfoWrap,
  AvatarWrap,
  NewAvatar
} from '../../../UI/StyledComponent/ProfileStyled';
import {
  DownloadInput,
  InputWrap,
} from '../../../UI/StyledComponent/Templates';
import { startAvatar } from '../../../UI/StyledComponent/Image';

const validator = Yup.object({
  name: validatorForm.name,
  email: validatorForm.email
});

const ProfileForm = () => {

  const user = useSelector((state) => state.currentAuthUser.auth.user);
  const dispatch = useDispatch();
  const [avatar, setAvatar] = useState(null);

  const fileSelectedHandle = (event) => {
    const file = event.target.files[0];
    setAvatar(file);
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

      if (avatar) {
        formData.append('avatar', avatar, avatar.name);
      }

      dispatch(updateUser(formData))
        .then((successAction) => window.location.reload())
        .catch((errorOrAbortAction) => console.log(errorOrAbortAction));
    }
  });

  return (
    <form onSubmit={userProfile.handleSubmit}>
      <ProfileWrap>

        <AvatarWrap>
          <Button color="primary" component="label">
            <NewAvatar alt="avatar" 
              src={avatar ? URL.createObjectURL(avatar)
              :
              user.profile.avatar_path ? user.profile.avatar_path 
              : 
              startAvatar}
            />
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
