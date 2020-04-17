import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

import { getUserPosts } from '../../store/actions/postAction';
import LoadingCard from '../LoadingCard';
import PostsEmpty from '../post/PostsEmpty';
import PostsCard from '../post/PostsCard';


const UserPosts = () => {
  const dispatch = useDispatch();
  const {
    userPosts, isLoading, nextNumbPage, lastPage
  } = useSelector((state) => state.postReducer);

  useEffect(() => {
    if (!userPosts.length) {
      dispatch(getUserPosts(1));
    }
    // eslint-disable-next-line
  }, [dispatch]);

  const hendleUserPosts = () => {
    if (!isLoading) {
      dispatch(getUserPosts(nextNumbPage));
    }
  };

  return (
    userPosts ?
      <InfiniteScroll
        pageStart={0}
        loadMore={hendleUserPosts}
        hasMore={nextNumbPage <= lastPage }
        loader={<div key={0}> <LoadingCard/> </div>}
      >
        <PostsCard posts={userPosts}/>
      </InfiniteScroll> :
      <PostsEmpty/>
  );
};

export default UserPosts;
