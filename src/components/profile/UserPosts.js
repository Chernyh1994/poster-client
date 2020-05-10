import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

import { getMyPosts } from '../../store/actions/postAction';
import LoadingCard from '../LoadingCard';
import EmptyContentCard from '../EmptyContentCard';
import PostCard from '../post/PostCard';

const UserPosts = () => {
  const dispatch = useDispatch();
  const { myPostsNormalize, isLoading } = useSelector((state) => state.postReducer);

  useEffect(() => {
    if (!myPostsNormalize.result.length) {
      dispatch(getMyPosts(1));
    }
  }, [dispatch, myPostsNormalize]);

  const handlePosts = () => {
    if (!isLoading) {
      dispatch(getMyPosts(myPostsNormalize.nextNumbPage));
    }
  };

  return (
    myPostsNormalize.result.length ?
      <InfiniteScroll
        pageStart={0}
        loadMore={handlePosts}
        hasMore={myPostsNormalize.nextNumbPage <= myPostsNormalize.lastPage }
        loader={<div key={0}> <LoadingCard/> </div>}
      >
        { myPostsNormalize.result.map((post, index) => <PostCard key={index} post={myPostsNormalize.entities.posts[post]}/>)}
      </InfiniteScroll> :
    <EmptyContentCard/>
  );
};

export default UserPosts;
