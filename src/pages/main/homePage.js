import React from 'react';

import {
  FormTitle,
  PostCard
} from '../../components/styledComponent/Templates';
import CreatePostForm from '../../components/post/CreatePostForm';

const HomePage = () => (
  <PostCard>
    <FormTitle> Home </FormTitle>
    <CreatePostForm/>
  </PostCard>
);

export default HomePage;
