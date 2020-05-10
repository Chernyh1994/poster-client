import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

import { getPosts } from '../../store/actions/postAction';
import LoadingCard from '../LoadingCard';
import EmptyContentCard from '../EmptyContentCard';
import PostCard from './PostCard';

const Posts = () => {
  const dispatch = useDispatch();
  const { postsNormalize, isLoading } = useSelector((state) => state.postReducer);

  useEffect(() => {
    if (!postsNormalize.result.length) {
      dispatch(getPosts(1));
    }
  }, [dispatch, postsNormalize]);

  const handlePosts = () => {
    if (!isLoading) {
      dispatch(getPosts(postsNormalize.nextNumbPage));
    }
  };

  return (
    postsNormalize.result.length ?
      <InfiniteScroll
        pageStart={0}
        loadMore={handlePosts}
        hasMore={postsNormalize.nextNumbPage <= postsNormalize.lastPage }
        loader={<div key={0}> <LoadingCard/> </div>}
      >
        { postsNormalize.result.map((post, index) => <PostCard key={index} post={postsNormalize.entities.posts[post]}/>)}
      </InfiniteScroll> :
      <EmptyContentCard/>
  );
};

export default Posts;
