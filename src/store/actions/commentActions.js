import {
  CREATE_COMMENT,
  COMMENT
} from '../constants';

export const createComment = (description, postId, parentId) => ({
  type: CREATE_COMMENT,
  request:
      {
        url: '/api/V1/comment',
        method: 'post',
        data: description,
        postId,
        parentId
      }
});

export const getComments = (id) => ({
  type: COMMENT,
  request:
      {
        url: `/api/V1/comment/${id}`,
        method: 'get'
      }
});
