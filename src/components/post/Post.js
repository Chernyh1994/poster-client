import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import LoadingCard from '../LoadingCard';
import EmptyContentCard from '../EmptyContentCard';
import PostCard from './PostCard';
import Comments from '../comment/Comments';

const Post = ({ postId }) => {
  const { post, isLoading } = useSelector((state) => state.posts);

  if (isLoading) {
    return <LoadingCard/>;
  }

  return (
    post ?
      <div>
        <PostCard post={post}/>
        <Comments postId={postId}/>
      </div> :
      <EmptyContentCard/>
  );
};

export default Post;
