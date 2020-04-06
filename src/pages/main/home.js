import React from 'react';
import { useSelector } from 'react-redux';

import PostList from '../../components/PostList';
import LoginForm from '../../components/LoginForm';
import { 
    TemplateHomeBlock, 
    FormTitle,
    TemplateContent ,
    FormCardHome
} from '../../components/styledComponent/Templates';

const Home = () => {
    const { user } = useSelector(state => state.authReducer);

    return(
        <React.Fragment>
            {!user ?
            <TemplateHomeBlock>

                <TemplateContent>
                    <PostList/>     
                </TemplateContent>

                <FormCardHome>
                    <FormTitle> 
                        LOGIN 
                    </FormTitle>
                    <LoginForm/>
                </FormCardHome>
                
            </TemplateHomeBlock>
            :
            <PostList/> }
        </React.Fragment>
    )
};

export default Home;
