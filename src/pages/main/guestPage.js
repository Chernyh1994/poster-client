import React from 'react';

import LoginForm from '../../components/auth/LoginForm';
import {
  TemplateHomeBlock,
  FormTitle,
  TemplateContent,
  FormCardHome
} from '../../components/styledComponent/Templates';
import Posts from '../../components/post/Posts';

const GuestPage = () => (
  <TemplateHomeBlock>
    <TemplateContent>
      <Posts/>
    </TemplateContent>
    <FormCardHome>
      <FormTitle> LOGIN </FormTitle>
      <LoginForm/>
    </FormCardHome>
  </TemplateHomeBlock>
);

export default GuestPage;
