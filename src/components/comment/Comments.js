import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

import CommentCard from './CommentCard';
import LoadingCard from '../LoadingCard';
import EmptyContentCard from '../EmptyContentCard';
import { getComments } from '../../store/actions/commentAction';

const Comments = ({ postId }) => {

  const dispatch = useDispatch();
  const { comments, isLoading } = useSelector((state) => state.commentReducer);
  // const [ lastId, setLastId ] = useState(0);

  // let lastId = comments.allIds[comments.allIds.length - 1];

  // console.log(lastId)

  useEffect(() => {
    dispatch(getComments(postId, 0));
  }, [dispatch, postId]);

  const handlePosts = () => {
    if (!isLoading) {
      dispatch(getComments(postId, comments.allIds[comments.allIds.length - 1] ));
    }
  };

  return (
    comments.allIds.length ?
      <InfiniteScroll
        pageStart={0}
        loadMore={handlePosts}
        hasMore={true}
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
