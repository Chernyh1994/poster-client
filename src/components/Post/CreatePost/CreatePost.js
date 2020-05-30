import React from 'react';
import Card from '@material-ui/core/Card';
import { useSelector } from 'react-redux';

import {
  FormTitle
} from '../../UI/StyledComponent/Templates';
import { StyledCard } from '../../UI/StyledComponent/Card';
import CreatePostForm from './CreatePostForm';

const CreatePost = () => {
  const classes = StyledCard();
  const { isLoading } = useSelector((state) => state.posts);

  return (
    <Card className={classes.root}>
      <FormTitle> Home </FormTitle>
      <CreatePostForm isLoading={isLoading} />
    </Card>
  );
};

export default CreatePost;
