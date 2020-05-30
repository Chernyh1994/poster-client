import React from 'react';
import { useSelector } from 'react-redux';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';

import LodingCard from '../../UI/LoadingCard';
import EmptyContentCard from '../../UI/EmptyContentCard';
import CommentCard from '../CommentCard';

const Subcomments = ({ expanded, subcomments }) => {
  const { isLoading } = useSelector((state) => state.comments);

  if (isLoading) {
    return <LodingCard/>;
  }

  return (
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        {subcomments.length ?
          subcomments.map((subcomment, index) => <CommentCard key={index} comment={subcomment}/>) :
          <EmptyContentCard/>}
      </CardContent>
    </Collapse>
  );
};

export default Subcomments;
