import { normalize, schema } from 'normalizr';
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

const normalizedComments = (comments) => {

  const comment = new schema.Entity('comments');

  // const mySchema = [ comment ];

  const mySchema = { comments: [comment] };

  const commentsNormalize = normalize(comments.data, mySchema);
  return (
    commentsNormalize
  );
};


// const addCommentIds = (comments) => (
//   comments.data.map((comment) => comment.id)
// );

// const addCommentParentIds = (comments) => (
//   comments.data.reduce((accumulator, item) => {
//     if (item.parent_id === null) {
//       accumulator.push(item.id);
//     }
//     return accumulator;
//   }, [])
// );

const normalizedData = (state, action) => {
  const { comments } = action.response.data;

  // const subCommentList = {};
  // const subCommentIds = [];

  // const commentsList = comments.data.reduce((accumulator, item) => {
  //   const commentIds = [];
  //   item.comments.forEach((comment) => {
  //     commentIds.push(comment.id);
  //     subCommentIds.push(comment.id);
  //     subCommentList[comment.id] = comment;
  //   });

  //   item.comments = commentIds;
  //   return { ...accumulator, [item.id]: item };
  // }, {});

  return {
    ...state,
    ...normalizedComments(comments),
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
