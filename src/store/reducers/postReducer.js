import {
  POSTS,
  POSTS_SUCCESS,
  POSTS_ERROR,
  POST,
  POST_SUCCESS,
  POST_ERROR,
  USER_POSTS,
  USER_POSTS_SUCCESS,
  USER_POSTS_ERROR
} from '../constants/postConstants';

const initialState = {
  posts: {
    postId : {},
    allIds : []
  },
  post: null,
  userPosts: [],
  isLoading: false,
  nextNumbPage: null,
  lastPage: null
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTS:
    case POST:
    case USER_POSTS:
      return {
        ...state,
        isLoading: true
      };
    case POSTS_SUCCESS:
      const { posts } = action.response.data;
      return {
        ...state,
        posts: {
          byId: posts.data.reduce((accumulator, item) => {
            return { ...accumulator, [item.id]: item }
          }),
          allIds:  [ ...posts.data.map((post)=> post.id)] ,
        },
        // isLoading: false,
        // nextNumbPage: posts.current_page + 1,
        // lastPage: posts.last_page
      };
    case POST_SUCCESS:
      const { post } = action.response.data;
      return {
        ...state,
        post,
        isLoading: false
      };
    case USER_POSTS_SUCCESS:
      const { user_posts } = action.response.data;
      return {
        ...state,
        userPosts: [...state.userPosts, ...user_posts.data],
        isLoading: false,
        nextNumbPage: user_posts.current_page + 1,
        lastPage: user_posts.last_page
      };
    case POSTS_ERROR:
    case POST_ERROR:
    case USER_POSTS_ERROR:
      const { error } = action.error.message;
      return {
        ...state,
        error,
        isLoading: false
      };
    default: return state;
  }
};
