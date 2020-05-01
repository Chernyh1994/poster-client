import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

import { getMyPosts } from '../../store/actions/postAction';
import LoadingCard from '../LoadingCard';
import EmptyContentCard from '../EmptyContentCard';
import PostCard from '../post/PostCard';


const UserPosts = () => {
  const dispatch = useDispatch();
  const {
    posts, isLoading, nextNumbPage, lastPage
  } = useSelector((state) => state.postReducer);

  useEffect(() => {
    if (!posts.myIds.length) {
      dispatch(getMyPosts());
    }
    // eslint-disable-next-line
  }, [dispatch]);

  const hendleUserPosts = () => {
    if (!isLoading) {
      dispatch(getMyPosts(nextNumbPage));
    }
  };

  return (
    posts.myIds ?
      <InfiniteScroll
        pageStart={0}
        loadMore={hendleUserPosts}
        hasMore={nextNumbPage <= lastPage }
        loader={<div key={0}> <LoadingCard/> </div>}
      >
        <PostCard posts={posts.myIds}/>
      </InfiniteScroll> :
      <EmptyContentCard/>
  );
};

export default UserPosts;
