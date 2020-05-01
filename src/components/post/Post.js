/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPost } from '../../store/actions/postAction';
import LoadingCard from '../LoadingCard';
import EmptyContentCard from '../EmptyContentCard';
import PostCard from './PostCard';
import Comments from '../comment/Comments';

const Post = ({ postId }) => {
  const dispatch = useDispatch();
  const { post, isLoading } = useSelector((state) => state.postReducer);

  useEffect(() => {
    dispatch(getPost(postId));
  }, [dispatch, postId]);

  if (isLoading) {
    return <LoadingCard/>;
  }

  return (
    post ?
      <div>
        <PostCard post={post}/>
        <Comments postId={post.id}/>
      </div>
      :
      <EmptyContentCard postId={postId}/>
  );
};

export default Post;
