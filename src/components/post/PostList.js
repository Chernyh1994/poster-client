import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPosts } from '../../store/actions/postAction';
import LoadingCard from '../LoadingCard';
import EmptyCard from './EmptyCard';
import PostCard from './PostCard';


const PostList = () => {

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getPosts()); 
  },[dispatch]);

  const { postList, isLoading } = useSelector(state => state.postReducer);

  if(isLoading){
    return <LoadingCard/>
  }

  return (
    postList && postList.length ?
      <PostCard/>
      :
      <EmptyCard/>
  )
};

export default PostList;