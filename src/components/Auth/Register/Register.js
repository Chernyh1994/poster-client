import React from 'react';

import {
  FormTemplate,
  FormCard,
  FormTitle
} from '../../UI/StyledComponent/Templates';
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
