import React from 'react';

import LoginForm from '../Auth/Login/LoginForm';
import {
  TemplateHomeBlock,
  FormTitle,
  TemplateContent,
  FormCardHome
} from '../UI/StyledComponent/Templates';
import Posts from '../post/Posts';

const HomePage = () => (
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

export default HomePage;