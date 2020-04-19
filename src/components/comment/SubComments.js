/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';

import LodingCard from '../LoadingCard';
import CommentEmpty from './CommentEmpty';
import SubCommentsCard from './SubCommentsCard';

const SubComments = ({ expanded }) => {
  const { subComments, isLoading } = useSelector((state) => state.commentReducer);

  if (isLoading) {
    return <LodingCard/>;
  }

  return (
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        { subComments ?
          <SubCommentsCard subComments={subComments}/> :
          <CommentEmpty/>
        }
      </CardContent>
    </Collapse>
  );
};

export default SubComments;
