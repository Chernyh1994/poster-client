/* eslint-disable import/no-cycle */
/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';

import CommentCard from './CommentsCard';
import LodingCard from '../LoadingCard';

const SubComment = ({ expanded, postId }) => {
  const comment = useSelector((state) => state.commentReducer.comment);

  //bug

  return (
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        { !!comment ? <CommentCard comments={comment.comments} postId={postId} /> : <LodingCard/>}
      </CardContent>
    </Collapse>
  );
};

export default SubComment;
