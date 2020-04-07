import {  
    GET_COMMENT,
    GET_COMMENT_SUCCESS,
    GET_COMMENT_ERROR,
  } from '../constants';
  
  const initialState = {
    commentList:null,
    isLoading: false,
  };
    
  export const commentReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_COMMENT:
      return {
        ...state,
        isLoading: true
      };
      case GET_COMMENT_SUCCESS:
        const { comment } = action.response.data;
        return {
          ...state,
          commentList: comment,
          isLoading: false
        }; 
      case GET_COMMENT_ERROR:  
        const { error } = action.error.message;
        return {
          ...state,
          error,
          isLoading: false
        };
      default: return state;
    }
  };
    
  