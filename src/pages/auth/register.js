import React from 'react';

import { 
  CustomForm, 
  CustomCard, 
  CustomHeadlineForm,
} from '../../components/styledComponent/Templates';
import RegisterForm from "../../components/RegisterForm";

const Register = () => {
  return (
    <CustomForm>
      <CustomCard>
        <CustomHeadlineForm>
          REGISTRATION
        </CustomHeadlineForm>
        <RegisterForm/>
      </CustomCard>
    </CustomForm>
  );
};

export default Register;
