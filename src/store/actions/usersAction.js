import { REGISTER_USER, REGISTER_START, REGISTER_FAIL, REGISTER_SUCCESS, REGISTER_LOGOUT } from '../types'

export const createUser = (user) => ({
  type: REGISTER_USER,
  payload: user
});


export const authStart = () => {
  return {
      type: REGISTER_START
  }
};

export const authSuccess = (token, userId) => {
  return {
      type: REGISTER_SUCCESS,
      token: token,
  }
};

export const authFail = (error) => {
return {
    type: REGISTER_FAIL,
    error: error
}
};

export const logoutSucceed = () => {
  return {
      type: REGISTER_LOGOUT
  }
};
