import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

import { getPosts } from '../../store/actions/postAction';
import LoadingCard from '../LoadingCard';
import EmptyContentCard from '../EmptyContentCard';
import PostsCard from './PostsCard';


const Posts = () => {
  const dispatch = useDispatch();
  const {
    posts, isLoading, nextNumbPage, lastPage
  } = useSelector((state) => state.postReducer);

  useEffect(() => {
    if (!posts.length) {
      dispatch(getPosts(1));
    }
    // eslint-disable-next-line
  }, [dispatch]);

  const hendlePosts = () => {
    if (!isLoading) {
      dispatch(getPosts(nextNumbPage));
    }
  };

  return (
    posts ?
      <InfiniteScroll
        pageStart={0}
        loadMore={hendlePosts}
        hasMore={nextNumbPage <= lastPage }
        loader={<div key={0}> <LoadingCard/> </div>}
      >
        <PostsCard posts={posts}/>
      </InfiniteScroll> :
      <EmptyContentCard/>
  );
};

export default Posts;
