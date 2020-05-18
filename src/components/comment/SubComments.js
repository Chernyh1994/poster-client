import React from 'react';
import { useSelector } from 'react-redux';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';

import LodingCard from '../LoadingCard';
import EmptyContentCard from '../EmptyContentCard';
import CommentCard from './CommentCard';

const SubComments = ({ expanded, comment }) => {
  const { isLoading } = useSelector((state) => state.commentReducer);

  if (isLoading) {
    return <LodingCard/>;
  }

  return (
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        {comment.comments.length ?
          comment.comments.map((comment, index) => <CommentCard key={index} comment={comment}/>) 
          :
          <EmptyContentCard/>}
      </CardContent>
    </Collapse>
  );
};

export default SubComments;
