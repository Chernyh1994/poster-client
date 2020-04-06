import React from 'react';

import { 
  FormTemplate, 
  FormCard, 
  FormTitle, 
} from '../../components/styledComponent/Templates';
import LoginForm from '../../components/LoginForm';

const Login = () => {
  return (
    <FormTemplate>
      <FormCard>
        <FormTitle> 
          LOGIN 
        </FormTitle>
        <LoginForm/>
      </FormCard>
    </FormTemplate>
  );
};

export default Login;