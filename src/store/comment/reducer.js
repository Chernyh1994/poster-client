import { success, error } from 'redux-saga-requests';
import { COMMENTS, CLEARE_COMMENTS } from './constants';
import { addAllIds, addByIds } from '../../utils/normalizingStore';

const initialState = {
  byId: {},
  allIds: [],
  hasMore: 0,
  isLoading: false,
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENTS:
      return {
        ...state,
        isLoading: true
      };
    case success(COMMENTS):
      const { comments } = action.response.data;
      return {
        ...state,
        byId: {...state.byId, ...addByIds(comments)},
        allIds: [...state.allIds, ...addAllIds(comments)],
        hasMore: comments.length,
        isLoading: false,
      };
    case error(COMMENTS):
      const message = action.error.message;
      return {
        ...state,
        message,
        isLoading: false
      };
    case CLEARE_COMMENTS:
      return initialState;
    default: 
      return state;
  }
};

export default commentReducer;