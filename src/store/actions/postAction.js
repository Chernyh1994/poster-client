import {
  POSTS,
  CREATE_POST,
  POST,
  USER_POSTS
} from '../constants';

export const getPosts = (numbPage) => ({
  type: POSTS,
  request:
      {
        url: `/api/V1/post?page=${numbPage}`,
        method: 'get'
      }
});

export const createPost = (formData) => ({
  type: CREATE_POST,
  request:
      {
        url: '/api/V1/post',
        method: 'post',
        data: formData
      }
});

export const getPost = (id) => ({
  type: POST,
  request:
      {
        url: `/api/V1/post/${id}`,
        method: 'get'
      }
});

export const getUserPosts = (numbPage) => ({
  type: USER_POSTS,
  request:
      {
        url: `/api/V1/user/posts?page=${numbPage}`,
        method: 'get'
      }
});
