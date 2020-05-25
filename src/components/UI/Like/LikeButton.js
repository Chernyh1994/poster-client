import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import { useDispatch } from 'react-redux';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { setLike, setUnlike } from '../../../store/post/actions';
import { WrapperButton, ContentButton } from '../StyledComponent/Templates';

const LikeButton = ({ post, commentId, likesCount }) => {

  const dispatch = useDispatch();
  const currentUserLike = !!post.likes.length;

  const [userLike, setUserLike] = useState(currentUserLike);
  const [userUnlike, setUserUnlike] = useState(false);

  const handleLike = () => {
    if(userLike) {
      dispatch(setUnlike(post.id))
        .then((successAction) => setUserLike(false), setUserUnlike(true))
        .catch((errorOrAbortAction) => console.log(errorOrAbortAction));
    } else {
      dispatch(setLike(post.id))
        .then((successAction) => setUserLike(true), setUserUnlike(false))
        .catch((errorOrAbortAction) => console.log(errorOrAbortAction));
    }
  }

  return (
    <WrapperButton>
      <IconButton aria-label="share" onClick={handleLike} >
        <FavoriteIcon fontSize='small' color={ userLike ? "secondary" : "disabled"}/>
      </IconButton>
      <ContentButton>
        {currentUserLike ? (userUnlike ? --likesCount :  likesCount ) : (userLike ? ++likesCount : likesCount)}
      </ContentButton>
    </WrapperButton>
  )
}
export default LikeButton;
