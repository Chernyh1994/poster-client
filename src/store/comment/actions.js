import {
  CREATE_COMMENT,
  COMMENTS,
  CLEARE_COMMENTS,
  COMMENT_LIKE,
  COMMENT_UNLIKE
} from './constants';

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

export const getComments = (postId, createdAt) => ({
  type: COMMENTS,
  request: {
    url: `/api/V1/post/${postId}/comment/${createdAt}`,
    method: 'get'
  }
});

export const getCleareComments = () => ({
  type: CLEARE_COMMENTS
});

export const setLike = (commentId) => ({
  type: COMMENT_LIKE,
  request: {
    url: `api/V1/comment/${commentId}/like`,
    method: 'get'
  }
});

export const setUnlike = (commentId) => ({
  type: COMMENT_UNLIKE,
  request: {
    url: `api/V1/comment/${commentId}/unlike`,
    method: 'get'
  }
});
