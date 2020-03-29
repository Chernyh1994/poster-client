import React, { useEffect } from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import {TemplateForm, Headline, CardForm} from "../../components/styledComponent/Templates";
import LoginForm from "../../components/LoginForm";
import { useSelector } from 'react-redux'; 

export default function Login({ history }) {

    const token = useSelector(state => state.authReducer.token);

    useEffect(
        () => {
            if(token) history.push('/test')
        },
        [history, token]
    )
     
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
