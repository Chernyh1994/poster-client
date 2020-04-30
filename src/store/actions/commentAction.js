import {
  CREATE_COMMENT,
  SUB_COMMENTS,
  COMMENTS
} from '../constants/commentConstants';

export const createComment = (content, parentId, postId) => ({
  type: CREATE_COMMENT,
  request: {
    url: `/api/V1/post/${postId}/comment`,
    method: 'post',
    data: { content, parentId }
  }
});

export const getSubComments = (postId, commentId) => ({
  type: SUB_COMMENTS,
  request: {
    url: `/api/V1/post/${postId}/comment/${commentId}`,
    method: 'get'
  }
});

export const getComments = (postId) => ({
  type: COMMENTS,
  request: {
    url: `/api/V1/post/${postId}/comment`,
    method: 'get'
  }
});
