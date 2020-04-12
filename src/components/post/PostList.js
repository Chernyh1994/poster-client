import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

import { getPosts } from '../../store/actions/postAction';
import LoadingCard from '../LoadingCard';
import EmptyCard from './EmptyCard';
import PostCard from './PostCard';


const PostList = () => {
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
        <PostCard/>
      </InfiniteScroll> :
      <EmptyCard/>
  );
};

export default PostList;
