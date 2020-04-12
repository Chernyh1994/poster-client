import React from 'react';
import { useSelector } from 'react-redux';

import Posts from '../../components/post/Posts';
import LoginForm from '../../components/LoginForm';
import {
  TemplateHomeBlock,
  FormTitle,
  TemplateContent,
  FormCardHome
} from '../../components/styledComponent/Templates';

const Home = () => {
  const { user } = useSelector((state) => state.authReducer);

  return (
    !user ?
      <TemplateHomeBlock>

        <TemplateContent>
          {/* <Posts/> */}
        </TemplateContent>

        <FormCardHome>
          <FormTitle>
            LOGIN
          </FormTitle>
          <LoginForm/>
        </FormCardHome>

      </TemplateHomeBlock> :
      <Posts/>
  );
};

export default Home;
