import { normalize, schema } from 'normalizr';
import {
  CREATE_POST,
  CREATE_POST_SUCCESS,
  CREATE_POST_ERROR,
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
  postsNormalize: {
    entities: {
      posts: {}
    },
    result: []
  },
  myPostsNormalize: {
    entities: {
      posts: {}
    },
    result: []
  },
  post: null,
  isLoading: false
};


const normalizedPosts = (posts) => {
  const post = new schema.Entity('posts');
  const mySchema = [ post ];
  const postsNormalize = normalize(posts, mySchema);
  return (
    postsNormalize
  );
};

const addStatePosts = (state, action) => {
  const { posts } = action.response.data;

  return {
    ...state,
    postsNormalize: {
      ...normalizedPosts(posts.data),
      nextNumbPage: posts.current_page + 1,
      lastPage: posts.last_page
    },
    isLoading: false
  };
};

const addStateMyPosts = (state, action) => {
  const { posts } = action.response.data;

  return {
    ...state,
    myPostsNormalize: {
      ...normalizedPosts(posts.data),
      nextNumbPage: posts.current_page + 1,
      lastPage: posts.last_page
    },
    isLoading: false
  };
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
    case POSTS:
    case POST:
    case MY_POSTS:
      return {
        ...state,
        isLoading: true
      };
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        postsNormalize: {
          entities: {
            posts: {}
          },
          result: []
        },
        myPostsNormalize: {
          entities: {
            posts: {}
          },
          result: []
        },
        isLoading: false
      };
    case POSTS_SUCCESS:
      return addStatePosts(state, action);
    case MY_POSTS_SUCCESS:
      return addStateMyPosts(state, action);
    case POST_SUCCESS:
      const { post } = action.response.data;
      return {
        ...state,
        post,
        isLoading: false
      };
    case CREATE_POST_ERROR:
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
