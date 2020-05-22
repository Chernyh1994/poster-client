import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

import { getPosts } from '../../store/post/actions';
import LoadingCard from '../UI/LoadingCard';
import EmptyContentCard from '../UI/EmptyContentCard';
import PostCard from './PostCard';

const Posts = () => {
  const dispatch = useDispatch();
  const { 
    byId,
    allIds, 
    isLoading,
    nextNumbPage,
    lastPage
  } = useSelector((state) => state.posts);
  const allIdsLength = allIds.length;

  useEffect(() => {
    if(!allIdsLength) {
      dispatch(getPosts('2020-03-19 21:27:16'));
    }
  }, [dispatch, allIdsLength]);

  console.log(new Date)

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
