/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

import LoadingCard from '../LoadingCard';
import CommentEmptyCard from './CommentEmptyCard';
import CommentCard from './CommentCard';
import { getComments } from '../../store/actions/commentActions';

const CommentList = ({ postId }) => {
  const dispatch = useDispatch();
  const { commentList, isLoading, hasMore } = useSelector((state) => state.commentReducer);
  const getCountComment = commentList.length;

  useEffect(() => {
    if (!getCountComment) {
      dispatch(getComments(postId, getCountComment));
    }
    // eslint-disable-next-line
  }, [dispatch]);

  const hendleComments = () => {
    if (!isLoading) {
      dispatch(getComments(postId, getCountComment));
    }
  };

  return (
    commentList && commentList.length ?
      <InfiniteScroll
        pageStart={0}
        loadMore={hendleComments}
        hasMore={hasMore}
        loader={<div key={0}> <LoadingCard/> </div>}
      >
        <CommentCard/>
      </InfiniteScroll> :
      <CommentEmptyCard/>
  );
};

export default CommentList;
