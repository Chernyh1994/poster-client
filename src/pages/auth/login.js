import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import {TemplateForm, Headline, CardForm} from "../../components/styledComponent/Templates";
import LoginForm from "../../components/LoginForm";

export default function Login() {

    return (
        <StylesProvider injectFirst>
            <TemplateForm>
                <CardForm>
                    <Headline> LOGIN </Headline>
                    <LoginForm/>
                </CardForm>
            </TemplateForm>
        </StylesProvider>
    );
}
