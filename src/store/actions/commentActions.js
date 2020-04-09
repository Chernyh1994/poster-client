import {
  CREATE_COMMENT,
  GET_COMMENT,
  GET_SUBCOMMENT,
  CREATE_SUBCOMMENT
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

export const createSubComment = (description, userId, parentId) => ({
  type: CREATE_SUBCOMMENT,
  request:
      {
        url: '/api/comment/sub/create',
        method: 'post',
        data: description,
        userId,
        parentId
      }
});

export const getComments = (id, offset) => ({
  type: GET_COMMENT,
  request:
      {
        url: `/api/comment/${id}/${offset}`,
        method: 'get'
      }
});


export const getSubComments = (id) => ({
  type: GET_SUBCOMMENT,
  request:
      {
        url: `/api/comment/sub/${id}`,
        method: 'get'
      }
});
