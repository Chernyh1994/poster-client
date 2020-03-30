import React, { useState } from 'react';
//
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/actions/authAction';
//
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
//
import { useFormik } from 'formik';
import * as Yup from 'yup';
//
import {TemplateBlock} from "./styledComponent/Templates";

const validator = Yup.object({
    email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
    password: Yup.string()
        .min(6, 'Password must be longer')
        .required('Required'),
});

const LoginForm = () => {
    
    const dispatch = useDispatch();

    const [visibility, setVisibility] = useState({
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setVisibility(
            {
                ...visibility,
                showPassword: !visibility.showPassword,
            },
        );
    };

    const login = useFormik({
        initialValues: {
            email: '',
            password:'',
        },

        validationSchema: validator,

        onSubmit: (email, password) => {
            dispatch(loginUser(email, password));
        },
    });

    return (
        <form onSubmit={login.handleSubmit}>
            <TemplateBlock>
                <TextField
                    fullWidth
                    label="Email*"
                    name="email"
                    variant="outlined"
                    {...login.getFieldProps('email')}
                    error={!!login.touched.email && !!login.errors.email }
                    helperText={login.touched.email && login.errors.email ? login.errors.email: null}
                />
            </TemplateBlock>

            <TemplateBlock>
                <TextField
                    fullWidth
                    label="Password*"
                    type={visibility.showPassword ? 'text' : 'password'}
                    variant="outlined"
                    {...login.getFieldProps('password')}
                    error={!!login.touched.password && !!login.errors.password }
                    helperText={login.touched.password && login.errors.password ? login.errors.password: null}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                >
                                    {visibility.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
            </TemplateBlock>

            <TemplateBlock>
                <Button color="primary" type="submit" startIcon={<PersonAddIcon fontSize="small" />} >
                    Sing Up
                </Button>
            </TemplateBlock>

        </form>
    );
}

export default LoginForm;