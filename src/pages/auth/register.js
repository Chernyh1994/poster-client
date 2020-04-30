import React from 'react';

import {
  FormTemplate,
  FormCard,
  FormTitle
} from '../../components/styledComponent/Templates';
import RegisterForm from '../../components/auth/RegisterForm';

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
