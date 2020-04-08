import {  
    POST_LIST_SUCCESS, 
    POST_LIST_ERROR,
    POST_LIST,
    GET_POST,
    GET_POST_SUCCESS,
    GET_POST_ERROR,
  } from '../constants';
  
  const initialState = {
    postList: [],
    post: null,
    isLoading: false,
    hasMore: true
  };
    
  export const postReducer = (state = initialState, action) => {
    switch (action.type) {
      case POST_LIST:
      case GET_POST: 
      return {
        ...state,
        isLoading: true
      };
      case POST_LIST_SUCCESS:
        const { items, hasMore } = action.response.data;
        return {
          ...state,
          postList: [...state.postList, ...items],
          isLoading: false,
          hasMore: hasMore 
        };
      case GET_POST_SUCCESS:
        const { post } = action.response.data;
        return {
          ...state,
          post: post,
          isLoading: false
        };
      case POST_LIST_ERROR:
      case GET_POST_ERROR:  
        const { error } = action.error.message;
        return {
          ...state,
          error,
          isLoading: false
        };
      default: return state;
    }
  };
    
  