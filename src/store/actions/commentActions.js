import {
  CREATE_COMMENT,
  GET_COMMENT
} from '../constants';

export const createComment = (description, userId, postId) => ({
  type: CREATE_COMMENT,
  request:
      {
        url: '/api/comment/create',
        method: 'post',
        data: description,
        userId,
        postId
      }
});

export const getComments = (id) => ({
  type: GET_COMMENT,
  request:
      {
        url: `/api/comment/${id}`,
        method: 'get'
      }
});
