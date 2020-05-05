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
  posts: {
    byId: {},
    allIds: []
  },
  myPosts: {
    byId: {},
    allIds: []
  },
  post: null,
  isLoading: false,
};

const addPostList = posts => {
  return (
    posts.data.reduce((accumulator, item) => ({ ...accumulator, [item.id]: item }), {})
  )
}

const addPostIds = posts => {
  return (
    posts.data.map((post) => post.id)
  )
}

const normalizedPosts = (state, action) => {
  const { posts } = action.response.data;
  return {
    ...state,
    posts: {
      byId: {...state.posts.byId, ...addPostList(posts)},
      allIds: [...state.posts.allIds, ...addPostIds(posts)],
      nextNumbPage: posts.current_page + 1,
      lastPage: posts.last_page
    },
    isLoading: false
  };
}

const normalizedUserPosts = (state, action) => {
  const { posts } = action.response.data;

  return {
    ...state,
    myPosts: {
      byId: {...state.myPosts.byId, ...addPostList(posts)},
      allIds: [...state.myPosts.allIds, ...addPostIds(posts)],
      nextNumbPage: posts.current_page + 1,
      lastPage: posts.last_page
    },
    isLoading: false
  };
}

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
        isLoading: false,
      };
    case POSTS_SUCCESS:
      return normalizedPosts(state, action);
    case MY_POSTS_SUCCESS:
      return normalizedUserPosts(state, action);
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
        isLoading: false,
      };
    default: return state;
  }
};
