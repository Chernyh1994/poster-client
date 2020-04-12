/* eslint-disable import/no-cycle */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import CardActions from '@material-ui/core/CardActions';

import { StyledCommentCard } from '../styledComponent/Card';
import SubComment from './SubComments';
import CommentModal from './CommentModal';
import { getComments } from '../../store/actions/commentActions';

const CommentButton = ({ parentId, postId, commentId }) => {
  const classes = StyledCommentCard();
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
    dispatch(getComments(commentId));
  };

  return (
    <div>
      <CardActions disableSpacing>
        <CommentModal parentId={parentId} postId={postId} />
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
      <SubComment expanded={expanded} postId={postId}/>
    </div>
  );
};

export default CommentButton;
