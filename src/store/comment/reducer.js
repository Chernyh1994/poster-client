import { success, error } from 'redux-saga-requests';
import { COMMENTS, CLEARE_COMMENTS } from './constants';
import { keyAllIds, keyByIds } from '../../utils/normalizingStore';

const initialState = {
  byId: {},
  allIds: [],
  isLoading: false
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENTS:
      return {
        ...state,
        isLoading: true
      };
    case success(COMMENTS):
      const comments = action.response.data.comments;
      return {
        ...state,
        byId: { ...state.byId, ...keyByIds(comments) },
        allIds: [...state.allIds, ...keyAllIds(comments)],
        isLoading: false
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
