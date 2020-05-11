import { normalize, schema } from 'normalizr';
import {
  COMMENTS,
  COMMENTS_SUCCESS,
  COMMENTS_ERROR
} from '../constants/commentConstants';

const initialState = {
  commentsNormalize: {
    entities: {
      comments: {},
      subComments: {}
    },
    result: [],
    commentsIds: []
  },
  settings: {}
};

const normalizedComments = (comments) => {
  const subComment = new schema.Entity('subComments')
  const comment = new schema.Entity('comments', {
    comments : [subComment]
  })
  const commentsNormalize = normalize(comments, [comment]);
  return (
    commentsNormalize
  );
};

const addCommentIds = (comments) => (
  comments.reduce((accumulator, item) => {
    if (item.parent_id === null) {
      accumulator.push(item.id);
    }
    return accumulator;
  }, [])
);

const normalizedData = (state, action) => {
  const { comments } = action.response.data;

  return {
    ...state,
    commentsNormalize: {
      ...normalizedComments(comments.data),
      commentsIds: [...addCommentIds(comments.data)]
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
        commentsNormalize: {
          entities: {
            comments: {}
          },
          result: [],
          commentsIds: []
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
