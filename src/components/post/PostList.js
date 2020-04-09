import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

import { getPosts } from '../../store/actions/postAction';
import LoadingCard from '../LoadingCard';
import EmptyCard from './EmptyCard';
import PostCard from './PostCard';


const PostList = () => {
  const dispatch = useDispatch();
  const { postList, isLoading, hasMore } = useSelector((state) => state.postReducer);
  const getCountPost = postList.length;

  useEffect(() => {
    if (!getCountPost) {
      dispatch(getPosts(getCountPost));
    }
    // eslint-disable-next-line
  }, [dispatch]);

  const hendlePosts = () => {
    if (!isLoading) {
      dispatch(getPosts(getCountPost));
    }
  };

  return (
    postList && postList.length ?
      <InfiniteScroll
        pageStart={0}
        loadMore={hendlePosts}
        hasMore={hasMore}
        loader={<div key={0}> <LoadingCard/> </div>}
      >
        <PostCard/>
      </InfiniteScroll> :
      <EmptyCard/>
  );
};

export default PostList;
