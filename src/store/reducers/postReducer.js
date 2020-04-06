import {  
    POST_LIST_SUCCESS, 
    POST_LIST_ERROR,
    POST_LIST,
  } from '../constants';
  
  const initialState = {
    postList: null,
    isLoding: false,
  };
    
  export const postReducer = (state = initialState, action) => {
    switch (action.type) {
      case POST_LIST: 
      return {
        ...state,
        isLoding: true
      };
      case POST_LIST_SUCCESS:
        const { items } = action.response.data;
        return {
          ...state,
          postList: items,
          isLoding: false
        };
      case POST_LIST_ERROR:
        const { error } = action.error.message;
        return {
          ...state,
          error,
          isLoding: false
        };
      default: return state;
    }
  };
    
  