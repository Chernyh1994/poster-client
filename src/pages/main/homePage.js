import React from 'react';
import Card from '@material-ui/core/Card';
import { useSelector } from 'react-redux';

import {
  FormTitle
} from '../../components/styledComponent/Templates';
import { StyledCard } from '../../components/styledComponent/Card';
import CreatePostForm from '../../components/post/CreatePostForm';
import GuestPage from './guestPage';

const HomePage = () => {
  const classes = StyledCard();
  const user = useSelector((state) => state.currentAuthUser.auth.user);
  const { isLoading } = useSelector((state) => state.posts);

  const isAuthorized = !!user;
  return (
    isAuthorized ?
      <Card className={classes.root}>
        <FormTitle> Home </FormTitle>
        <CreatePostForm isLoading={isLoading} />
      </Card> :
      <GuestPage/>
  );
};

export default HomePage;
