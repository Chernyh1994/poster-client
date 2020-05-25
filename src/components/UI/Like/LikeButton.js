import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import { useDispatch } from 'react-redux';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { setLike, setUnlike } from '../../../store/post/actions';
import { WrapperButton, ContentButton } from '../StyledComponent/Templates';

const LikeButton = ({ postId, commentId, likesCount }) => {

  const dispatch = useDispatch();
  const [newLike, setNewLike] = useState(false);

  const handleLike = () => {
    if(!newLike) {
      dispatch(setLike(postId))
        .then((successAction) => setNewLike(true))
        .catch((errorOrAbortAction) => console.log(errorOrAbortAction));
    } else {
      dispatch(setUnlike(postId))
        .then((successAction) => setNewLike(false))
        .catch((errorOrAbortAction) => console.log(errorOrAbortAction));
    }
  }

  return (
    <WrapperButton>
      <IconButton aria-label="share" onClick={handleLike} >
        <FavoriteIcon fontSize='small' color={ newLike ? "secondary" : "disabled"}/>
      </IconButton>
      <ContentButton>
        {newLike ? ++likesCount : likesCount }
      </ContentButton>
    </WrapperButton>
  )
}
export default LikeButton;
