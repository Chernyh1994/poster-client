/* eslint-disable react/prop-types */
import React from 'react';

import Post from '../../components/post/Post';

const postPage = (props) => {
  const postId = props.match.params.id;

  return (<Post postId={postId}/>);
};

export default postPage;
