import React, { useState, useRef } from 'react';
import './login.css';
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

export default function Login() {
    const classes = useStyles();

    const [visibility, setVisibility] = useState({
        showPassword: false,
    });

    const [values, setValues] = useState({
        email: '',
        password: '',
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

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const submitDataForm = () => {
        const test = values;
        console.log(test);
    };

    React.useEffect(() => {
        ValidatorForm.addValidationRule('isPasswordProtected', (value) => value.length > 4);
    });

    const inputRef = useRef(null);

    return (
        <div className="template-form">
            <Card className={classes.card}>
                <ValidatorForm
                    className="login-form"
                    ref={inputRef}
                    onSubmit={submitDataForm}
                    onError={(errors) => console.log('Error message:', errors)}
                >
                    <div className="login-form-input">
                        <Typography gutterBottom variant="h5" component="h2">
                            Login
                        </Typography>
                    </div>
                    <div className="login-form-input">
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
                    <div className="login-form-input">
                        <TextValidator
                            fullWidth
                            label="Password*"
                            onChange={handleChange('password')}
                            autoComplete="false"
                            type={visibility.showPassword ? 'text' : 'password'}
                            variant="outlined"
                            value={values.password}
                            validators={['isPasswordProtected', 'required']}
                            errorMessages={[ 'passport must be longer ', 'this field is required']}
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
