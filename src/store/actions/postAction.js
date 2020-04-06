import {  
    POST_LIST, 
    CREATE_POST,
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