import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { InputWrap } from '../../UI/StyledComponent/Templates';
import { loginUser } from '../../../store/currentAuthUser/actions';
import { validatorForm } from '../../../config/validatorForm';

const validator = Yup.object({
  email: validatorForm.email,
  password: validatorForm.password
});

const LoginForm = () => {
  const [showPassword, setShow] = useState(false);

  const dispatch = useDispatch();

  const handleClickShowPassword = () => {
    setShow(!showPassword);
  };

  const login = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: validator,
    onSubmit: ({ email, password }) => {
      console.log(email);
      dispatch(loginUser(email, password));
    }
  });

  return (
    <form onSubmit={login.handleSubmit}>
      <InputWrap>
        <TextField
          fullWidth
          label="Email*"
          name="email"
          variant="outlined"
          {...login.getFieldProps('email')}
          error={!!login.touched.email && !!login.errors.email }
          helperText={login.touched.email && login.errors.email ? login.errors.email : null}
        />
      </InputWrap>

      <InputWrap>
        <TextField
          fullWidth
          label="Password*"
          type={showPassword ? 'text' : 'password'}
          variant="outlined"
          {...login.getFieldProps('password')}
          error={!!login.touched.password && !!login.errors.password }
          helperText={login.touched.password && login.errors.password ? login.errors.password : null}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </InputWrap>

      <InputWrap>
        <Button color="primary" fullWidth type="submit" startIcon={<PersonAddIcon fontSize="small" />} >
          Log in
        </Button>
      </InputWrap>

    </form>
  );
};

export default LoginForm;
