import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

import CommentCard from './CommentCard';
import LoadingCard from '../LoadingCard';
import EmptyContentCard from '../EmptyContentCard';
import { getComments } from '../../store/actions/commentAction';

const Comments = ({ postId }) => {

  const dispatch = useDispatch();
  const { 
    comments, 
    isLoading,
    nextNumbPage,
    lastPage 
  } = useSelector((state) => state.commentReducer);

  useEffect(() => {
    dispatch(getComments(postId));
  }, [dispatch, postId]);

  const handlePosts = () => {
    if (!isLoading) {
      dispatch(getComments(nextNumbPage));
    }
  };

  return (
    comments.allIds.length ?
      <InfiniteScroll
        pageStart={0}
        loadMore={handlePosts}
        hasMore={nextNumbPage <= lastPage}
        loader={<div key={0}> <LoadingCard/> </div>}
      >
        {comments.allIds.map((comment, index) => {
          if(comments.byId[comment].parent_id === null) {
            return (
              <CommentCard key={index} comment={comments.byId[comment]} postId={postId}/>
            )
          }
        })}
      </InfiniteScroll> 
      :
      <EmptyContentCard/>
  );
};

export default Comments;
