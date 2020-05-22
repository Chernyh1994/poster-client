import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import CardActions from '@material-ui/core/CardActions';

import { StyledCommentCard } from '../UI/StyledComponent/Card';
import SubComments from './SubComments.js';
import CreateCommentModal from '../UI/CreateComment/CreateCommentModal';

const CommentActions = ({ postId, parentId, comment }) => {
  const classes = StyledCommentCard();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <CardActions disableSpacing>
        <CreateCommentModal parentId={parentId} postId={postId} />
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
      <SubComments expanded={expanded} comment={comment}/>
    </div>
  );
};

export default CommentActions;
