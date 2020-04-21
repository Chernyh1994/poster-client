/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

import LoadingCard from '../LoadingCard';
import CommentsCard from './CommentsCard';
import CommentEmpty from './CommentEmpty';
import { getComments } from '../../store/actions/commentAction';


const Comments = ({ postId }) => {
  const dispatch = useDispatch();
  const {
    comments, isLoading, nextNumbPage, lastPage
  } = useSelector((state) => state.commentReducer);

  useEffect(() => {
    dispatch(getComments(postId));
    // eslint-disable-next-line
  }, [dispatch]);

  const hendlePosts = () => {
    if (!isLoading) {
      dispatch(getComments(nextNumbPage));
    }
  };

  return (
    comments ?
      <InfiniteScroll
        pageStart={0}
        loadMore={hendlePosts}
        hasMore={nextNumbPage <= lastPage }
        loader={<div key={0}> <LoadingCard/> </div>}
      >
        <CommentsCard comments={comments} postId={postId}/>
      </InfiniteScroll> :
      <CommentEmpty/>
  );
};

export default Comments;
