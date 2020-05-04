import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

import { getMyPosts } from '../../store/actions/postAction';
import LoadingCard from '../LoadingCard';
import EmptyContentCard from '../EmptyContentCard';
import PostCard from '../post/PostCard';


const UserPosts = () => {
  const dispatch = useDispatch();
  const { myPosts, isLoading } = useSelector((state) => state.postReducer);

  useEffect(() => {
    if (!myPosts.allIds.length) {
      dispatch(getMyPosts(1));
    }
  }, [dispatch, myPosts]);

  const handleUserPosts = () => {
    if (!isLoading) {
      dispatch(getMyPosts(myPosts.nextNumbPage));
    }
  };

  return (
    myPosts.allIds.length ?
      <InfiniteScroll
        pageStart={0}
        loadMore={handleUserPosts}
        hasMore={myPosts.nextNumbPage <= myPosts.lastPage }
        loader={<div key={0}> <LoadingCard/> </div>}
      >
        { myPosts.allIds.map((post, index) => <PostCard key={index} post={myPosts.byId[post]}/>)}
      </InfiniteScroll> :
      <EmptyContentCard/>
  );
};

export default UserPosts;
