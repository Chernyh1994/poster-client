import React from 'react';

import {
  FormTemplate,
  FormCard,
  FormTitle
} from '../../components/styledComponent/Templates';
import LoginForm from '../../components/auth/LoginForm';

const Login = () => (
  <FormTemplate>
    <FormCard>
      <FormTitle>
          LOGIN
      </FormTitle>
      <LoginForm/>
    </FormCard>
  </FormTemplate>
);

export default Login;
