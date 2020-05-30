import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

import CommentCard from '../CommentCard';
import LoadingCard from '../../UI/LoadingCard';
import EmptyContentCard from '../../UI/EmptyContentCard';
import { getComments, getCleareComments } from '../../../store/comment/actions';
import { isoDate } from '../../../utils/converDate';

const Comments = ({ postId }) => {
  const dispatch = useDispatch();
  const {
    byId,
    allIds,
    isLoading,
    hasMore
  } = useSelector((state) => state.comments);
  const allIdsLength = allIds.length;

  useEffect(() => {
    if (!allIdsLength) {
      dispatch(getComments(postId, isoDate));
    }
    return () => dispatch(getCleareComments());
  }, [dispatch, postId]);

  const handlePosts = () => {
    if (!isLoading) {
      const lastAllIds = allIds[allIds.length - 1];
      const lastComment = byId[lastAllIds].created_at;
      dispatch(getComments(postId, lastComment));
    }
  };

  return (
    allIdsLength ?
      <InfiniteScroll
        pageStart={0}
        loadMore={handlePosts}
        hasMore={hasMore}
        loader={<div key={0}> <LoadingCard/> </div>}
      >
        {allIds.map((comment, index) => {
          if (byId[comment].parent_id === null) {
            return (
              <CommentCard key={index} comment={byId[comment]} postId={postId}/>
            );
          }
        })}
      </InfiniteScroll> :
      <EmptyContentCard/>
  );
};

export default Comments;
