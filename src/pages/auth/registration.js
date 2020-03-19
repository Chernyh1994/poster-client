import React, { useState, useRef } from 'react';
import './registration.css';
import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
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
    showPassword: false,
    showRepeatPassword: false,
  });

  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setVisibility(
      { 
        ...visibility, 
        showPassword: !visibility.showPassword,
      },
    );
  };

  const handleClickShowRepeatPassword = () => {
    setVisibility(
        {
          ...visibility,
          showRepeatPassword: !visibility.showRepeatPassword,
        },
    );
  };


  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const submitDataForm = () => {
    const test = values;
    fetch(`http://localhost:8000/register`,{
      method:'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(test)
    })

    console.log(test);
  };

  const inputRef = useRef(null);

  React.useEffect(() => {

    ValidatorForm.addValidationRule('isPasswordProtected', (value) => {
      const regexp = /(?=.*[0-9])(?=.*[a-z])[0-9a-z]{6,}/;
      if (!regexp.test(value)) {
        return false;
      }
      return true;
    });

    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      if (value !== values.password) {
        return false;
      }
      return true;
    });

    ValidatorForm.addValidationRule('isUsernameMatch', (value) => value.length > 4);

  });

  return (
    <div className="template-form">
      <Card className={classes.card}>
        <ValidatorForm
          className="rigistration-form"
          ref={inputRef}
          onSubmit={submitDataForm}
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
              errorMessages={['username must be longer ', 'this field is required']}
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
            <TextValidator
                fullWidth
                label="Password*"
                onChange={handleChange('password')}
                autoComplete="false"
                type={visibility.showPassword ? 'text' : 'password'}
                validators={['isPasswordProtected', 'required']}
                variant="outlined"
                errorMessages={[ 'passport must be longer and contain a number', 'this field is required']}
                value={values.password}
                InputProps={{
                  endAdornment: (
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
                  )
                }}
            />
          </div>
          <div className="registration-form-input">
            <TextValidator
                fullWidth
                label="Repeat password*"
                onChange={handleChange('repeatPassword')}
                autoComplete="false"
                type={visibility.showRepeatPassword ? 'text' : 'password'}
                variant="outlined"
                value={values.repeatPassword}
                validators={['isPasswordMatch', 'required']}
                errorMessages={['password mismatch', 'this field is required']}
                InputProps={{
                  endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowRepeatPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                          {visibility.showRepeatPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                  )
                }}
            />
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
