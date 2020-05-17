import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

import { getMyPosts } from '../../store/actions/postAction';
import LoadingCard from '../LoadingCard';
import EmptyContentCard from '../EmptyContentCard';
import PostCard from '../post/PostCard';

const UserPosts = () => {
  const dispatch = useDispatch();
  const { posts, isLoading } = useSelector((state) => state.postReducer);

  useEffect(() => {
    dispatch(getMyPosts(1));
  }, [dispatch]);

  const handleUserPosts = () => {
    if (!isLoading) {
      dispatch(getMyPosts(posts.nextNumbPage));
    }
  };

  return (
    posts.myIds.length ?
      <InfiniteScroll
        pageStart={0}
        loadMore={handleUserPosts}
        hasMore={posts.nextNumbPage <= posts.lastPage }
        loader={<div key={0}> <LoadingCard/> </div>}
      >
        { posts.myIds.map((post, index) => <PostCard key={index} post={posts.byId[post]}/>)}
      </InfiniteScroll> :
      <EmptyContentCard/>
  );
};

export default UserPosts;
