import {
  POSTS,
  POSTS_SUCCESS,
  POSTS_ERROR,
  POST,
  POST_SUCCESS,
  POST_ERROR,
  MY_POSTS,
  MY_POSTS_SUCCESS,
  MY_POSTS_ERROR
} from '../constants/postConstants';

const initialState = {
  posts: {
    byId: null,
    allIds: null
  },
  post: null,
  isLoading: false,
  nextNumbPage: null,
  lastPage: null
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTS:
    case POST:
    case MY_POSTS:
      return {
        ...state,
        isLoading: true
      };
    case POSTS_SUCCESS:
    case MY_POSTS_SUCCESS:
      const { posts } = action.response.data;
      return {
        ...state,
        posts: {
          byId: posts.data.reduce((accumulator, item) => ({ ...accumulator, [item.id]: item }), {}),
          allIds: [...posts.data.map((post) => post.id)]
        },
        isLoading: false,
        nextNumbPage: posts.current_page + 1,
        lastPage: posts.last_page
      };
    case POST_SUCCESS:
      const { post } = action.response.data;
      return {
        ...state,
        post,
        isLoading: false
      };
    case POSTS_ERROR:
    case POST_ERROR:
    case MY_POSTS_ERROR:
      const { error } = action.error.message;
      return {
        ...state,
        error,
        isLoading: false
      };
    default: return state;
  }
};
