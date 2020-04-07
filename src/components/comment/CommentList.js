import React  from 'react';
import { useSelector } from 'react-redux';

import LoadingCard from '../LoadingCard';
import CommentEmptyCard from './CommentEmptyCard';
import CommentCard from './CommentCard';


const CommentList = () => {

  const { commentList, isLoading } = useSelector(state => state.commentReducer);

  if(isLoading){
    return <LoadingCard/>
  }

  return (
    commentList && commentList.length ?
      <CommentCard/>
      :
      <CommentEmptyCard/>
  )
};

export default CommentList;