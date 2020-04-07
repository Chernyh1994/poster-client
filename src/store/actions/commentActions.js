import {  
    CREATE_COMMENT,
    GET_COMMENT,
  } from '../constants';
  
  export const createComment = (description, author_id, post_id) => ({
    type: CREATE_COMMENT,
    request: 
      { 
        url: '/api/comment/create', 
        method: 'post',
        data: description, author_id, post_id
      },
  })

  export const getComments = (id) => ({
    type: GET_COMMENT,
    request: 
      { 
        url: `/api/comment/${id}`, 
        method: 'get',
      },
  })