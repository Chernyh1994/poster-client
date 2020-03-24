import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../store/actions/usersAction';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import {TemplateBlock} from "./styledComponent/Templates";
import HomeIcon from "@material-ui/icons/Home";

const RegisterForm = ({dispatch}) => {

    const [visibility, setVisibility] = useState({
        showPassword: false,
        showRepeatPassword: false,
    });

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

    const register = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            repeatPassword: '',
        },

        validationSchema: Yup.object({
            name: Yup.string()
                .min(4, 'User Name must be longer')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            password: Yup.string()
                .min(6, 'Password must be longer')
                .required('Required'),
            repeatPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Required'),
        }),

        onSubmit: values => {
            const data = {...values, device_name:Math.random() + ''}
            dispatch(createUser(data));
        },
    });

    return (
        <form onSubmit={register.handleSubmit}>

            <TemplateBlock>
                <TextField
                    fullWidth
                    label="Name*"
                    name="Lary"
                    variant="outlined"
                    {...register.getFieldProps('name')}
                    error={!!register.touched.name && !!register.errors.name }
                    helperText={register.touched.name && register.errors.name ? register.errors.name: null}
                />
            </TemplateBlock>

            <TemplateBlock>
                <TextField
                    fullWidth
                    label="Email*"
                    name="email"
                    variant="outlined"
                    {...register.getFieldProps('email')}
                    error={!!register.touched.email && !!register.errors.email }
                    helperText={register.touched.email && register.errors.email ? register.errors.email: null}
                />
            </TemplateBlock>

            <TemplateBlock>
                <TextField
                    fullWidth
                    label="Password*"
                    type={visibility.showPassword ? 'text' : 'password'}
                    variant="outlined"
                    {...register.getFieldProps('password')}
                    error={!!register.touched.password && !!register.errors.password }
                    helperText={register.touched.password && register.errors.password ? register.errors.password: null}
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
            </TemplateBlock>

            <TemplateBlock>
                <TextField
                    fullWidth
                    label="Repeat Password*"
                    type={visibility.showRepeatPassword ? 'text' : 'password'}
                    variant="outlined"
                    {...register.getFieldProps('repeatPassword')}
                    error={!!register.touched.repeatPassword && !!register.errors.repeatPassword }
                    helperText={register.touched.repeatPassword && register.errors.repeatPassword ? register.errors.repeatPassword: null}
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
            </TemplateBlock>

            <TemplateBlock>
                <Button color="primary" type="submit" startIcon={<PersonAddIcon fontSize="small" />} >
                    Sing Up
                </Button>
                <Button color="secondary" startIcon={<HomeIcon fontSize="small" />}>
                    Cancel
                </Button>
            </TemplateBlock>

        </form>
    );
};

export default connect()(RegisterForm)

