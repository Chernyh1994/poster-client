import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUserPosts } from '../../store/actions/postAction';
import LoadingCard from '../LoadingCard';
import PostsEmpty from '../post/PostsEmpty';
import PostsCard from '../post/PostsCard';


const UserPosts = () => {
  const dispatch = useDispatch();
  const { userPosts, isLoading } = useSelector((state) => state.postReducer);

  useEffect(() => {
    if (!userPosts.length) {
      dispatch(getUserPosts());
    }
    // eslint-disable-next-line
  }, [dispatch]);

  if (isLoading) {
    return (<LoadingCard/>);
  }

  return (
    userPosts ?
      <PostsCard posts={userPosts}/> :
      <PostsEmpty/>
  );
};

export default UserPosts;
