import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

import { getPosts } from '../../store/actions/postAction';
import LoadingCard from '../LoadingCard';
import EmptyContentCard from '../EmptyContentCard';
import PostCard from './PostCard';

const Posts = () => {
  const dispatch = useDispatch();
  const { 
    byId,
    allIds, 
    isLoading,
    nextNumbPage,
    lastPage
  } = useSelector((state) => state.postReducer);
  const allIdsLength = allIds.length;

  useEffect(() => {
    if(!allIdsLength) {
      dispatch(getPosts(1));
    }
  }, [dispatch, allIdsLength]);

  const handlePosts = () => {
    if (!isLoading) {
      dispatch(getPosts(nextNumbPage));
    }
  };

  return (
    allIdsLength ?
      <InfiniteScroll
        pageStart={0}
        loadMore={handlePosts}
        hasMore={nextNumbPage <= lastPage}
        loader={<div key={0}> <LoadingCard/> </div>}
      >
        {allIds.map((post, index) => <PostCard key={index} post={byId[post]}/>)}
      </InfiniteScroll> 
      :
      <EmptyContentCard/>
  );
};

export default Posts;
