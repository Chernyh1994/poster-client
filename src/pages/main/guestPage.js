import React from 'react';

import LoginForm from '../../components/auth/LoginForm';
import {
  TemplateHomeBlock,
  FormTitle,
  TemplateContent,
  FormCardHome
} from '../../components/styledComponent/Templates';
import LoadingCard from '../../components/LoadingCard';

const GuestPage = () => (
  <TemplateHomeBlock>
    <TemplateContent>
      <LoadingCard/>
    </TemplateContent>
    <FormCardHome>
      <FormTitle> LOGIN </FormTitle>
      <LoginForm/>
    </FormCardHome>
  </TemplateHomeBlock>
);

export default GuestPage;
