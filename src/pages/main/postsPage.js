import React from 'react';

import Posts from '../../components/post/Posts';
import {
  TemplateHomeBlock,
  TemplateContent
} from '../../components/styledComponent/Templates';

const PostsPage = () => {
  return (
    <TemplateHomeBlock>

      <TemplateContent>
        <Posts/>
      </TemplateContent>

    </TemplateHomeBlock>
  );
};

export default PostsPage;
