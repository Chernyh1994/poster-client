import {
  POSTS,
  CREATE_POST,
  POST,
  TEST
} from '../constants';

export const getPosts = (numbPage) => ({
  type: POSTS,
  request:
      {
        url: `/api/V1/post?page=${numbPage}`,
        method: 'get'
      }
});

export const createPost = (title, description) => ({
  type: CREATE_POST,
  request:
      {
        url: '/api/V1/post',
        method: 'post',
        data: title,
        description
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

export const testUpload = (formData) => ({
  type: TEST,
  request:
      {
        url: '/api/V1/images',
        method: 'post',
        data: formData
      }
});
