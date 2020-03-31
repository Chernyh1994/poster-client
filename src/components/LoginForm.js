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

import { CustomBlock } from "./styledComponent/Templates";
import { loginUser } from '../store/actions/authAction';

const validator = Yup.object({
    email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
    password: Yup.string()
        .min(8, 'Password must be longer')
        .required('Required'),
});

const LoginForm = () => {

    const [visibility, setVisibility] = useState({
        showPassword: false,
    });
    
    const dispatch = useDispatch();

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
            <CustomBlock>
                <TextField
                    fullWidth
                    label="Email*"
                    name="email"
                    variant="outlined"
                    {...login.getFieldProps('email')}
                    error={!!login.touched.email && !!login.errors.email }
                    helperText={login.touched.email && login.errors.email ? login.errors.email: null}
                />
            </CustomBlock>

            <CustomBlock>
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
            </CustomBlock>

            <CustomBlock>
                <Button color="primary" type="submit" startIcon={<PersonAddIcon fontSize="small" />} >
                    Sing Up
                </Button>
            </CustomBlock>

        </form>
    );
}

export default LoginForm;