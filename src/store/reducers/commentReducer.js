import { success, error } from 'redux-saga-requests';
import {
  COMMENTS
} from '../constants/commentConstants';
import { addByIds } from '../../utils/normalizingStore';

const initialState = {
  comments: {
    byId: {},
    allIds: [],
    parentIds: []
  },
  subComments: {
    byId: {},
    allIds: []
  },
  settings: {}
};

const addCommentParentIds = (comments) => (
  comments.data.reduce((accumulator, item) => {
    if (item.parent_id === null) {
      accumulator.push(item.id);
    }
    return accumulator;
  }, [])
);

const normalizedData = (state, action) => {
  const { comments } = action.response.data;

  const subCommentList = {};
  const subCommentIds = [];

  const commentsList = comments.data.reduce((accumulator, item) => {
    const commentIds = [];
    item.comments.forEach((comment) => {
      commentIds.push(comment.id);
      subCommentIds.push(comment.id);
      subCommentList[comment.id] = comment;
    });

    item.comments = commentIds;
    return { ...accumulator, [item.id]: item };
  }, {});

  return {
    ...state,
    comments: {
      byId: { ...state.comments.byId, ...commentsList },
      allIds: [...state.comments.allIds, ...addByIds(comments)],
      parentIds: [...state.comments.parentIds, ...addCommentParentIds(comments)]
    },
    subComments: {
      byId: { ...state.subComments.byId, ...subCommentList },
      allIds: [...state.subComments.allIds, ...subCommentIds]
    },
    settings: {
      isLoading: false,
      nextNumbPage: comments.current_page + 1,
      lastPage: comments.last_page
    }
  };
};

export function commentReducer(state = initialState, action) {
  switch (action.type) {
    case COMMENTS:
      return {
        ...state,
        comments: {
          byId: {},
          allIds: [],
          parentIds: []
        },
        subComments: {
          byId: {},
          allIds: []
        },
        settings: {
          isLoading: true
        }
      };
    case success(COMMENTS):
      return normalizedData(state, action);
    case error(COMMENTS):
      const message = action.error.message;
      return {
        ...state,
        settings: {
          message,
          isLoading: false
        }
      };
    default: return state;
  }
}
