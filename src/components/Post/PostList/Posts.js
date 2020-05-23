import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

import { getPosts } from '../../../store/post/actions';
import LoadingCard from '../../UI/LoadingCard';
import EmptyContentCard from '../../UI/EmptyContentCard';
import PostCard from '../PostCard';
import { TemplateContent } from '../../UI/StyledComponent/Templates';
import { isoDate } from '../../../utils/converDate';

const Posts = () => {
  const dispatch = useDispatch();

  const { byId, allIds, isLoading } = useSelector((state) => state.posts);
  const allIdsLength = allIds.length;
  const lastAllIds = allIds[allIds.length-1];

  useEffect(() => {
    if (!allIdsLength) {
      dispatch(getPosts(isoDate));
    }
  }, [dispatch, allIdsLength]);

  const handlePosts = () => {
    if (!isLoading) {
      const lastPost = byId[lastAllIds].created_at;
      dispatch(getPosts(lastPost));
    }
  };

  return (
    <TemplateContent>
      {allIdsLength ?
        <InfiniteScroll
          pageStart={0}
          loadMore={handlePosts}
          hasMore={false}
          loader={<div key={0}> <LoadingCard/> </div>}
        >
          {allIds.map((post, index) => <PostCard key={index} post={byId[post]}/>)}
        </InfiniteScroll> :
        <EmptyContentCard/>}
    </TemplateContent>
  );
};

export default Posts;
