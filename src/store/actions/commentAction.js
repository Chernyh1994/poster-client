/* eslint-disable no-unused-vars */
import {
  CREATE_COMMENT,
  SUB_COMMENTS,
  COMMENTS
} from '../constants';

export const createComment = (description, parentId, postId, handleClose) => ({
  type: CREATE_COMMENT,
  request:
      {
        url: `/api/V1/post/${postId}/comment`,
        method: 'post',
        data: description,
        parentId
      },
  meta: {
    getData: (data) => handleClose()
  }
});

export const getSubComments = (postId, commentId) => ({
  type: SUB_COMMENTS,
  request:
      {
        url: `/api/V1/post/${postId}/comment/${commentId}`,
        method: 'get'
      }
});

export const getComments = (postId) => ({
  type: COMMENTS,
  request:
      {
        url: `/api/V1/post/${postId}/comment`,
        method: 'get'
      }
});
