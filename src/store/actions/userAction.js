import {
  USER_PROFILE
} from '../constants/userConstants';

export const getUserProfile = (aurotId) => ({
  type: USER_PROFILE,
  request: {
    url: `/api/V1/user/${aurotId}`,
    method: 'get'
  }
});
