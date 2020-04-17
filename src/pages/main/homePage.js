import React from 'react';
import Card from '@material-ui/core/Card';

import {
  FormTitle
} from '../../components/styledComponent/Templates';
import { StyledCard } from '../../components/styledComponent/Card';
import CreatePostForm from '../../components/post/CreatePostForm';

const HomePage = () => {
  const classes = StyledCard();
  return (
    <Card className={classes.root}>
      <FormTitle> Home </FormTitle>
      <CreatePostForm/>
    </Card>
  );
};

export default HomePage;
