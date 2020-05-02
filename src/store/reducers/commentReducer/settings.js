import {
    COMMENTS,
    COMMENTS_SUCCESS,
    COMMENTS_ERROR
  } from '../../constants/commentConstants';

function addSettings(state, action) {

  const { comments } = action.response.data;
  
    return {
      ...state,        
      isLoading: false,
      nextNumbPage: comments.current_page + 1,
      lastPage: comments.last_page
    }
  }
  
export default function settings(state = {}, action) {
  
    switch (action.type) {
      case COMMENTS: 
        return {
          ...state,
          isLoading: true
        };
      case COMMENTS_SUCCESS:
        return addSettings(state, action)
      case COMMENTS_ERROR:
        const { error } = action.error.message;
        return {
          ...state,
          error,
          isLoading: false
        };
      default: return state;      
    }
  }