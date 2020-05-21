import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import HomeIcon from '@material-ui/icons/Home';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import { registerUser } from '../../store/auth/actions';
import { InputWrap } from '../styledComponent/Templates';
import { validatorForm } from '../../config/validatorForm';

const validator = Yup.object({
  name: validatorForm.name,
  email: validatorForm.email,
  password: validatorForm.password,
  repeatPassword: validatorForm.repeatPassword
});

const RegisterForm = () => {
  const dispatch = useDispatch();

  const [showPassword, setShow] = useState(false);
  const [showRepeatPassword, setRepeatShow] = useState(false);

  const handleShowPassword = () => {
    setShow(!showPassword);
  };

  const handleShowRepeatPassword = () => {
    setRepeatShow(!showRepeatPassword);
  };

  const register = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      repeatPassword: ''
    },

    validationSchema: validator,

    onSubmit: ({ name, email, password }) => {
      dispatch(registerUser(name, email, password));
    }
  });

  return (
    <form onSubmit={register.handleSubmit}>

      <InputWrap>
        <TextField
          fullWidth
          label="Name*"
          name="Lary"
          variant="outlined"
          {...register.getFieldProps('name')}
          error={!!register.touched.name && !!register.errors.name }
          helperText={register.touched.name && register.errors.name ? register.errors.name : null}
        />
      </InputWrap>

      <InputWrap>
        <TextField
          fullWidth
          label="Email*"
          name="email"
          variant="outlined"
          {...register.getFieldProps('email')}
          error={!!register.touched.email && !!register.errors.email }
          helperText={register.touched.email && register.errors.email ? register.errors.email : null}
        />
      </InputWrap>

      <InputWrap>
        <TextField
          fullWidth
          label="Password*"
          type={showPassword ? 'text' : 'password'}
          variant="outlined"
          {...register.getFieldProps('password')}
          error={!!register.touched.password && !!register.errors.password }
          helperText={register.touched.password && register.errors.password ? register.errors.password : null}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleShowPassword}
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
        <TextField
          fullWidth
          label="Repeat Password*"
          type={showRepeatPassword ? 'text' : 'password'}
          variant="outlined"
          {...register.getFieldProps('repeatPassword')}
          error={!!register.touched.repeatPassword && !!register.errors.repeatPassword }
          // eslint-disable-next-line max-len
          helperText={register.touched.repeatPassword && register.errors.repeatPassword ? register.errors.repeatPassword : null}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleShowRepeatPassword}
                  edge="end"
                >
                  {showRepeatPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </InputWrap>

      <InputWrap>
        <Button color="primary" type="submit" startIcon={<PersonAddIcon fontSize="small" />} >Sing Up</Button>
        <Button color="secondary" startIcon={<HomeIcon fontSize="small"/>} component={Link} to='/home'>Home</Button>
      </InputWrap>

    </form>
  );
};

export default RegisterForm;
