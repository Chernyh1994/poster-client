/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPost } from '../../store/actions/postAction';
import LoadingCard from '../LoadingCard';
import PostEmpty from './PostEmpty';
import PostCard from './PostCard';


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
    !post ?
      <PostEmpty postId={postId}/> :
      <PostCard/>
  );
};

export default Post;
