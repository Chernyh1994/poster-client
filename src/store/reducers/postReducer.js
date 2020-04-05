import {  
    POSTS_SUCCESS, 
    POSTS_ERROR,
  } from '../constants';
  
  const initialState = {
    items: null,
  };
    
  export const postReducer = (state = initialState, action) => {
    switch (action.type) {
      case POSTS_SUCCESS:
        console.log('testss');
        const { items } = action.response.data;
        return {
          ...state,
          items,
        };
      case POSTS_ERROR:
        const { error } = action.error.message;
        return {
          ...state,
          error,
        };
      default: return state;
    }
  };
    
  