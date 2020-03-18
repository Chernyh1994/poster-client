/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useRef } from 'react';
import './registration.css';
import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const useStyles = makeStyles({
  card: {
    minWidth: 375
  }
});

export default function Registration() {
  const classes = useStyles();

  const [visibility, setVisibility] = useState({
    showPassword: false
  });

  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    console.log(visibility);
    setVisibility(
      { 
        ...visibility, 
        showPassword: !visibility.showPassword,
        showConfirmPassword: !visibility.showConfirmPassword,
      },
    );
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const submitDataForm = () => {
    const test = values;
    // eslint-disable-next-line no-console
    console.log(test);
  };

  const inputRef = useRef(null);

  React.useEffect(() => {
    ValidatorForm.addValidationRule('isUsernameMatch', (value) => value.length > 4);
  });

  return (
    <div className="template-form">
      <Card className={classes.card}>
        <ValidatorForm
          className="rigistration-form"
          ref={inputRef}
          onSubmit={submitDataForm}
          // eslint-disable-next-line no-console
          onError={(errors) => console.log('Error message:', errors)}
        >
          <div className="registration-form-input">
            <Typography gutterBottom variant="h5" component="h2">
              Registration
            </Typography>
          </div>
          <div className="registration-form-input">
            <TextValidator
              fullWidth
              value={values.username}
              onChange={handleChange('username')}
              label="Username*"
              multiline
              variant="outlined"
              validators={['isUsernameMatch', 'required']}
              errorMessages={['username must be longer', 'this field is required']}
            />
          </div>
          <div className="registration-form-input">
            <TextValidator
              fullWidth
              value={values.email}
              onChange={handleChange('email')}
              label="Email*"
              multiline
              variant="outlined"
              validators={['required', 'isEmail']}
              errorMessages={['this field is required', 'email is not valid']}
            />
          </div>
          <div className="registration-form-input">
            <FormControl fullWidth className={clsx(classes.margin, classes.textField)} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password*</InputLabel>
              <OutlinedInput
                type={visibility.showPassword ? 'text' : 'password'}
                value={values.password}
                autoComplete="false"
                onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {visibility.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>
          </div>
          <div className="registration-form-input">
            <FormControl fullWidth className={clsx(classes.margin, classes.textField)} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Сonfirm password*</InputLabel>
              <OutlinedInput
                type={visibility.showConfirmPassword ? 'text' : 'password'}
                value={values.confirmPassword}
                autoComplete="false"
                onChange={handleChange('confirmPassword')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {visibility.showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>
          </div>
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              startIcon={<PersonAddIcon fontSize="small" />}
            >
              Sing Up
            </Button>
            <Link to='/' className="link">
              <Button
                variant="contained"
                color="secondary"
                startIcon={<HomeIcon fontSize="small" />}
              >
                Home
              </Button>
            </Link>
          </CardActions>
        </ValidatorForm>
      </Card>
    </div>
  );
}
