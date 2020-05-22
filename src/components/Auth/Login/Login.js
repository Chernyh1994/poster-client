import React from 'react';

import {
  FormTemplate,
  FormCard,
  FormTitle
} from '../../UI/StyledComponent/Templates';
import LoginForm from './LoginForm';

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
