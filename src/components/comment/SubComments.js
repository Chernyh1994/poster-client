/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';

import LodingCard from '../LoadingCard';
import EmptyContentCard from '../EmptyContentCard';
import CommentCard from './CommentCard';

const SubComments = ({ expanded, comment }) => {
  const { commentsNormalize, settings } = useSelector((state) => state.commentReducer);

  if (settings.isLoading) {
    return <LodingCard/>;
  }

  return (
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        { commentsNormalize.commentsIds.length ?
          comment.comments.map((comment, index) =>
           <CommentCard key={index} comment={commentsNormalize.entities.subComments[comment]}/>
          ) :
          <EmptyContentCard/>
        }
      </CardContent>
    </Collapse>
  );
};

export default SubComments;
