import {
    LIKE_POST,
    LIKE_COMMENT
  } from '../constants/likeConstants';
  
  export const getLikePost = (postId) => ({
    type: LIKE_POST,
    request: {
      url: '/api/V1/post/like',
      method: 'post',
      data: {post_id: postId}
    }
  });