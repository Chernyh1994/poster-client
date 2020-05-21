import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import AppBar from '@material-ui/core/AppBar';

export const FormTemplate = styled.div`
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const FormCard = styled(Card)`
    min-width: auto;
`;

export const FormCardHome = styled(Card)`
    height: fit-content;
    margin: 10px;
    width: 100%;
    width: -moz-available;         
    width: -webkit-fill-available;  
    width: fill-available;
`;

export const InputWrap = styled.div`
    padding: 15px;
`;

export const ButtonGroup = styled.div`
    padding: 15px;
    display: flex;
    justify-content: space-between;
`;

export const DownloadInput = styled.input`
    display: none;
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
    justify-content: center;
`;

export const TemplateContent = styled.div`
    width: 100%;
    width: -moz-available;         
    width: -webkit-fill-available;  
    width: fill-available;
    padding: 0;
`;
export const ImagesWraper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ImagesBlock = styled.div`
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.img`
    width: 100%;
    border-radius: 30px;
    padding: 20px;
`;

export const startAvatar = 'https://www.mattmovingsystems.com/root/images/profile_user.gif';

export const WrapperButton = styled.div`
    display: flex;
`;

export const ContentButton = styled.p`
    font-size: 0.875rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.43;
    letter-spacing: 0.01071em;
`;
