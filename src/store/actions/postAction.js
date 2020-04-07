import {  
    POST_LIST, 
    CREATE_POST,
    GET_POST,
  } from '../constants';
  
  export const getPosts = () => ({
    type: POST_LIST,
    request:
      { 
        url: '/api/post/posts', 
        method: 'get',
      },
  })
  
  export const createPost = (title, description, author_id) => ({
    type: CREATE_POST,
    request: 
      { 
        url: '/api/post/create', 
        method: 'post',
        data: title, description, author_id,
      },
  })

  export const getPost = (id) => ({
    type: GET_POST,
    request: 
      { 
        url: `/api/post/get/${id}`, 
        method: 'get',
      },
  })