/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';

import LodingCard from '../LoadingCard';
import EmptyContentCard from '../EmptyContentCard';
import CommentCard from './CommentCard';

const SubComments = ({ expanded, comment }) => {
  const { subComments, settings } = useSelector((state) => state.commentReducer);

  if (settings.isLoading) {
    return <LodingCard/>;
  }

  return (
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        { subComments.allIds.length ?
          comment.comments.map((comment, index) => <CommentCard key={index} comment={subComments.byId[comment]}/>) :
          <EmptyContentCard/>
        }
      </CardContent>
    </Collapse>
  );
};

export default SubComments;
