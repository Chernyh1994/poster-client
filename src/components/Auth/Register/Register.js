import React from 'react';

import {
  FormTemplate,
  FormCard,
  FormTitle
} from '../../styledComponent/Templates';
import RegisterForm from './RegisterForm';

const Register = () => (
  <FormTemplate>
    <FormCard>
      <FormTitle>
        REGISTRATION
      </FormTitle>
      <RegisterForm/>
    </FormCard>
  </FormTemplate>
);

export default Register;