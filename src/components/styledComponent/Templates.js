import styled from 'styled-components'
import Card from '@material-ui/core/Card';

const TemplateForm = styled.div`
    height: auto;
    padding: 7em 0 7em 0 ;
    display: flex;
    align-items: center;
    justify-content: center
`;

const TemplateBlock = styled.div`
    padding: 15px;
`;

const Headline = styled.h2`
    font-size: 1.5rem;
    font-family: "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.334;
    letter-spacing: 0em
    padding: 20px;
    text-align: center;
`;

const CardForm = styled(Card)`
   min-width: 375px;
`;

export {TemplateForm, TemplateBlock, Headline, CardForm}