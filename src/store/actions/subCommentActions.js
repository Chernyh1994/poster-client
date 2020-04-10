import {
  GET_SUB_COMMENT,
  CREATE_SUB_COMMENT
} from '../constants';

export const createSubComment = (description, userId, parentId) => ({
  type: CREATE_SUB_COMMENT,
  request:
        {
          url: '/api/subcomment/create',
          method: 'post',
          data: description,
          userId,
          parentId
        }
});

export const getSubComments = (id) => ({
  type: GET_SUB_COMMENT,
  request:
        {
          url: `/api/subcomment/${id}`,
          method: 'get'
        }
});
