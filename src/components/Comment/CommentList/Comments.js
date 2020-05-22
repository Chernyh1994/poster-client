import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

import CommentCard from '../CommentCard';
import LoadingCard from '../../UI/LoadingCard';
import EmptyContentCard from '../../UI/EmptyContentCard';
import { getComments, getCleareComments } from '../../../store/comment/actions';

const Comments = ({ postId, comments }) => {
  
  const dispatch = useDispatch();
  const {
    byId,
    allIds,
    isLoading,
  } = useSelector((state) => state.comments);
  const allIdsLength = allIds.length;

  useEffect(() => {
    if (!allIdsLength) {
      dispatch(getComments(postId));
    }
    return () => dispatch(getCleareComments());
  }, [dispatch, postId]);

  const handlePosts = () => {
    if (!isLoading) {
      dispatch(getComments(postId, allIds[allIdsLength - 1]));
    }
  };

  return (
    allIds.length ?
      <InfiniteScroll
        pageStart={0}
        loadMore={handlePosts}
        hasMore={false}
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
