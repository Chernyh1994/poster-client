import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import {TemplateForm, Headline, CustomCard} from "../../components/styledComponent/Templates";
import RegisterForm from "../../components/RegisterForm";

export default function Register() {

  return (
    <StylesProvider injectFirst>
      <TemplateForm>
        <CustomCard>
          <Headline> REGISTRATION </Headline>
          <RegisterForm/>
        </CustomCard>
      </TemplateForm>
    </StylesProvider>
  );
}
