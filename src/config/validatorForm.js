import * as Yup from 'yup';

export const validatorForm = {
  name: Yup.string()
    .min(4, 'Name must be longer than 4 characters')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Password must be longer than 8 characters')
    .required('Required'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Required')
};
