/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';

import { StyledCommentCard } from '../styledComponent/Card';

const SubCommentButton = ({ handleExpandClick, expanded }) => {
  const classes = StyledCommentCard();

  return (
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
  );
};

export default SubCommentButton;
