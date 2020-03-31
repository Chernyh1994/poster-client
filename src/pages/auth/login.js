import React from 'react';

import { 
  CustomForm, 
  CustomCard, 
  CustomHeadlineForm, 
} from '../../components/styledComponent/Templates';
import LoginForm from '../../components/LoginForm';

const Login = () => {
  return (
    <CustomForm>
      <CustomCard>
        <CustomHeadlineForm> 
          LOGIN 
        </CustomHeadlineForm>
        <LoginForm/>
      </CustomCard>
    </CustomForm>
  );
};

export default Login;