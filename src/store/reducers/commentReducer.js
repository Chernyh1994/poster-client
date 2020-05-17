import { success, error } from 'redux-saga-requests';
import { COMMENTS } from '../constants/commentConstants';
import { addAllIds, addByIds } from '../../utils/normalizingStore';

const initialState = {
  comments: {
    byId: {},
    allIds: []
  },
  isLoading: false,
};

const normalizedData = (state, action) => {
  const { comments } = action.response.data;

  return {
    ...state,
    comments: {
      byId: { ...state.comments.byId, ...addByIds(comments) },
      allIds: [...state.comments.allIds, ...addAllIds(comments)],
    },
    isLoading: false,
    nextNumbPage: comments.current_page + 1,
    lastPage: comments.last_page
  };
};

export function commentReducer(state = initialState, action) {
  switch (action.type) {
    case COMMENTS:
      return initialState;
    case success(COMMENTS):
      return normalizedData(state, action);
    case error(COMMENTS):
      const message = action.error.message;
      return {
        ...state,
        message,
        isLoading: false
      };
    default: return state;
  }
}
