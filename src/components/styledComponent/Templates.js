import styled from 'styled-components'
import Card from '@material-ui/core/Card';
import AppBar from '@material-ui/core/AppBar';

export const FormTemplate = styled.div`
    height: auto;
    padding: 7em 0 7em 0 ;
    display: flex;
    align-items: center;
    justify-content: center
`;

export const FormCard = styled(Card)`
    min-width: 375px;
`;

export const CustomBlock = styled.div`
    padding: 15px;
`;

export const FormTitle = styled.h3`
    font-size: 1.5rem;
    font-family: "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.334;
    letter-spacing: 0em
    padding: 20px;
    text-align: center;
`;

export const CustomAppBar = styled(AppBar)`
    z-index: 1201;
    flex-grow: 1;
    position: fixed;
`;

export const HeaderTitle = styled.h3`
    font-family: "Helvetica", "Arial", sans-serif;
    flex-grow: 1;
`;

export const TemplateHomeBlock = styled.h3`
    display: flex;
`;