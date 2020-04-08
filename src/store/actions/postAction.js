import {
  POST_LIST,
  CREATE_POST,
  GET_POST
} from '../constants';

export const getPosts = (offset) => ({
  type: POST_LIST,
  request:
      {
        url: `/api/post/posts/${offset}`,
        method: 'get'
      }
});

export const createPost = (title, description, userId) => ({
  type: CREATE_POST,
  request:
      {
        url: '/api/post/create',
        method: 'post',
        data: title,
        description,
        userId
      }
});

export const getPost = (id) => ({
  type: GET_POST,
  request:
      {
        url: `/api/post/get/${id}`,
        method: 'get'
      }
});
