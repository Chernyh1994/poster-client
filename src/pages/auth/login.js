import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import {TemplateForm, Headline, CustomCard} from "../../components/styledComponent/Templates";
import LoginForm from "../../components/LoginForm";

export default function Login() {

    return (
        <StylesProvider injectFirst>
            <TemplateForm>
                <CustomCard>
                    <Headline> LOGIN </Headline>
                    <LoginForm/>
                </CustomCard>
            </TemplateForm>
        </StylesProvider>
    );
}
