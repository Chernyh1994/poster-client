import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import {TemplateForm, Headline, CardForm} from "../../components/styledComponent/Templates";
import RegisterForm from "../../components/RegisterForm";

export default function Register() {

  return (
      <StylesProvider injectFirst>
        <TemplateForm>
          <CardForm>
            <Headline> REGISTER </Headline>
            <RegisterForm/>
          </CardForm>
        </TemplateForm>
      </StylesProvider>
  );
}
