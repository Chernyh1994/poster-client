/* eslint-disable react/prop-types */
import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';

const SubCommentContent = ({ expanded }) => {
  return (
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <Typography>
          test
        </Typography>
      </CardContent>
    </Collapse>
  );
};

export default SubCommentContent;
