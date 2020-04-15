import {
  CREATE_COMMENT,
  COMMENT
} from '../constants';

export const createComment = (description, parentId, postId) => ({
  type: CREATE_COMMENT,
  request:
      {
        url: `/api/V1/post/${postId}/comment`,
        method: 'post',
        data: description,
        parentId
      }
});

export const getComments = (postId, commentId) => ({
  type: COMMENT,
  request:
      {
        url: `/api/V1/post/${postId}/comment/${commentId}`,
        method: 'get'
      }
});
