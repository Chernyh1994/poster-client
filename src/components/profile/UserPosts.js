import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

import { getMyPosts } from '../../store/post/actions';
import LoadingCard from '../LoadingCard';
import EmptyContentCard from '../EmptyContentCard';
import PostCard from '../post/PostCard';

const UserPosts = () => {
  const dispatch = useDispatch();
  const { 
    byId,
    myIds, 
    isLoading,
    nextNumbPage,
    lastPage
  } = useSelector((state) => state.postReducer);
  const myIdsLength = myIds.length;
  console.log()

  useEffect(() => {
    if(!myIdsLength) {
      dispatch(getMyPosts(1));
    }
  }, [dispatch, myIdsLength]);

  const handleUserPosts = () => {
    if (!isLoading) {
      dispatch(getMyPosts(nextNumbPage));
    }
  };

  return (
    myIdsLength ?
      <InfiniteScroll
        pageStart={0}
        loadMore={handleUserPosts}
        hasMore={nextNumbPage <= lastPage }
        loader={<div key={0}> <LoadingCard/> </div>}
      >
        { myIds.map((post, index) => <PostCard key={index} post={byId[post]}/>)}
      </InfiniteScroll> 
      :
      <EmptyContentCard/>
  );
};

export default UserPosts;
