/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

import LoadingCard from '../LoadingCard';
import CommentsCard from './CommentsCard';
import EmptyContentCard from '../EmptyContentCard';
import { getComments } from '../../store/actions/commentAction';

const Comments = ({ postId }) => {
  const dispatch = useDispatch();
  const {comments, settings} = useSelector((state) => state.commentReducer);

  useEffect(() => {
    dispatch(getComments(postId));
  }, [dispatch, postId]);

  const hendlePosts = () => {
    if (!settings.isLoading) {
      dispatch(getComments(settings.nextNumbPage));
    }
  };

  return (
    comments.parentIds ?
      <InfiniteScroll
        pageStart={0}
        loadMore={hendlePosts}
        hasMore={settings.nextNumbPage <= settings.lastPage }
        loader={<div key={0}> <LoadingCard/> </div>}
      >
      { comments.parentIds.map((comment, index) => <CommentsCard key={index} comment={comments.byId[comment]} postId={postId}/>)}
      </InfiniteScroll> :
      <EmptyContentCard/>
  );
};

export default Comments;
