import React from 'react';

import { 
  FormTemplate, 
  FormCard, 
  FormTitle,
} from '../../components/styledComponent/Templates';
import RegisterForm from "../../components/RegisterForm";

const Register = () => {
  return (
    <FormTemplate>
      <FormCard>
        <FormTitle>
          REGISTRATION
        </FormTitle>
        <RegisterForm/>
      </FormCard>
    </FormTemplate>
  );
};

export default Register;
