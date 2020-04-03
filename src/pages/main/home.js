import React from 'react';
import { useSelector } from 'react-redux';

import Post from '../../components/Post';
import LoginForm from '../../components/LoginForm';
import { 
    TemplateHomeBlock, 
    FormTitle 
} from '../../components/styledComponent/Templates';

const Home = () => {
    const { token } = useSelector(state => state.authReducer);

    return(
        <React.Fragment>
            {!token ?
            <TemplateHomeBlock>
                <div>
                    <Post/>     
                </div>
                <div>
                    <FormTitle> 
                        LOGIN 
                    </FormTitle>
                    <LoginForm/>
                </div>
            </TemplateHomeBlock>
            :
            <Post/> }
        </React.Fragment>
    )
};

export default Home;
