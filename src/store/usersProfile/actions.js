import { USER_PROFILE } from './constants';

export const getUserProfile = (aurotId) => ({
  type: USER_PROFILE,
  request: {
    url: `/api/V1/user/${aurotId}`,
    method: 'get'
  }
});
