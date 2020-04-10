/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import CardActions from '@material-ui/core/CardActions';

import { StyledCommentCard } from '../styledComponent/Card';
import SubCommentContent from './SubCommentContent';
import CommentModal from './CommentModal';
import { getSubComments } from '../../store/actions/subCommentActions';

const SubCommentButton = ({ parentId }) => {
  const classes = StyledCommentCard();
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
    dispatch(getSubComments(parentId));
  };

  return (
    <div>
      <CardActions disableSpacing>
        <CommentModal parentId={parentId}/>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <SubCommentContent expanded={expanded}/>
    </div>
  );
};

export default SubCommentButton;
