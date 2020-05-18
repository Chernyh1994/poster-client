import {
  CREATE_COMMENT,
  COMMENTS,
  CLEARE_COMMENTS
} from '../constants/commentConstants';

export const createComment = (content, parentId, postId) => ({
  type: CREATE_COMMENT,
  request: {
    url: `/api/V1/post/${postId}/comment`,
    method: 'post',
    data: { content, parent_id: parentId }
  },
  meta: {
    asPromise: true
  }
});

export const getComments = (postId, lastId) => ({
  type: COMMENTS,
  request: {
    url: `/api/V1/post/${postId}/comment/${lastId}`,
    method: 'get'
  }
});

export const getCleareComments = () => ({
  type: CLEARE_COMMENTS
})