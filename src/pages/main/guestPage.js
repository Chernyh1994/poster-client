import React from 'react';

import LoginForm from '../../components/auth/LoginForm';
import {
  TemplateHomeBlock,
  FormTitle,
  TemplateContent,
  FormCardHome
} from '../../components/styledComponent/Templates';

const GuestPage = () => (
  <TemplateHomeBlock>
    <TemplateContent>
      <div>test</div>
    </TemplateContent>
    <FormCardHome>
      <FormTitle> LOGIN </FormTitle>
      <LoginForm/>
    </FormCardHome>

  </TemplateHomeBlock>
);

export default GuestPage;
