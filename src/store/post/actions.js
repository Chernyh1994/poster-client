import {
  POSTS,
  CREATE_POST,
  CURRENT_USER_POSTS,
  POST_LIKE,
  POST_UNLIKE
} from './constants';

export const getPosts = (createdAt) => ({
  type: POSTS,
  request: {
    url: `/api/V1/post/${createdAt}`,
    method: 'get'
  }
});

export const createPost = (formData) => ({
  type: CREATE_POST,
  request: {
    url: '/api/V1/post',
    method: 'post',
    data: formData
  },
  meta: {
    asPromise: true
  }
});

export const getMyPosts = (numbPage) => ({
  type: CURRENT_USER_POSTS,
  request: {
    url: `/api/V1/user/posts?page=${numbPage}`,
    method: 'get'
  }
});

export const setLike = (postId) => ({
  type: POST_LIKE,
  request: {
    url: `api/V1/post/${postId}/like`,
    method: 'get'
  }
});

export const setUnlike = (postId) => ({
  type: POST_UNLIKE,
  request: {
    url: `api/V1/post/${postId}/unlike`,
    method: 'get'
  }
});