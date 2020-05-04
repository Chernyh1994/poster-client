import {
  COMMENTS,
  COMMENTS_SUCCESS,
  COMMENTS_ERROR
} from '../constants/commentConstants';

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

const addCommentIds = comments => {
  return (
    comments.data.map((comment) => comment.id)
  )
}

const addCommentParentIds = comments => {
  return (
    comments.data.reduce((accumulator, item) => {
      if (item.parent_id === null) {
        accumulator.push(item.id);
      }
      return accumulator;
    }, [])  
  )
}

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
      byId: {...state.comments.byId, ...commentsList},
      allIds: [...state.comments.allIds, ...addCommentIds(comments)],
      parentIds: [...state.comments.parentIds, ...addCommentParentIds(comments)],
    },
    subComments: {
      byId: {...state.subComments.byId, ...subCommentList},
      allIds: [...state.subComments.allIds, ...subCommentIds],
    },
    settings: {
      isLoading: false,
      nextNumbPage: comments.current_page + 1,
      lastPage: comments.last_page
    }
  };
}

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
    case COMMENTS_SUCCESS:
      return normalizedData(state, action);
    case COMMENTS_ERROR:
      const { error } = action.error.message;
      return {
        ...state,
        settings: {
          error,
          isLoading: false
        }
      };
    default: return state;
  }
}
