import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

import { getMyPosts } from '../../../../store/post/actions';
import LoadingCard from '../../../UI/LoadingCard';
import EmptyContentCard from '../../../UI/EmptyContentCard';
import PostCard from '../../../Post/PostCard';
import { TemplateContent } from '../../../UI/StyledComponent/Templates';
import { isoDate } from '../../../../utils/converDate';

const CurrentUserPosts = () => {
  
  const dispatch = useDispatch();
  const { 
    byId, 
    isLoading, 
    hasMore 
  } = useSelector((state) => state.posts);
  const { postIds } = useSelector((state) => state.currentAuthUser.currentUser);
  const allIdsLength = postIds.length;

  useEffect(() => {
    if (!allIdsLength) {
      dispatch(getMyPosts(isoDate));
    }
  }, [dispatch, allIdsLength]);

  const handlePosts = () => {
    if (!isLoading) {
      const lastAllIds = postIds[postIds.length-1];
      const lastPost = byId[lastAllIds].created_at;
      dispatch(getMyPosts(lastPost));
    }
  };

  return (
    <TemplateContent>
      {allIdsLength ?
        <InfiniteScroll
          pageStart={0}
          loadMore={handlePosts}
          hasMore={hasMore}
          loader={<div key={0}> <LoadingCard/> </div>}
        >
          {postIds.map((post, index) => <PostCard key={index} post={byId[post]}/>)}
        </InfiniteScroll> :
        <EmptyContentCard/>}
    </TemplateContent>
  );
};

export default CurrentUserPosts;