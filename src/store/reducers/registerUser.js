import { REGISTER_START, REGISTER_FAIL, REGISTER_SUCCESS, REGISTER_LOGOUT } from '../types'

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
};

const registerUser = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_START: 
      return {...state, ...{ loading: true, error: null }};
    case REGISTER_SUCCESS:
      return {...state, token: action.token, loading: false };
    case REGISTER_FAIL:
      return {...state,  loading: false, error: action.error };
    case REGISTER_LOGOUT:
      return {...state, token: null };
    default: return state;
  }
};

export default registerUser;
