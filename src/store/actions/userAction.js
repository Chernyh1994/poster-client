/* eslint-disable import/prefer-default-export */
import {
  USER_PROFILE
} from '../constants';

export const getUserProfile = (aurotId) => ({
  type: USER_PROFILE,
  request:
      {
        url: `/api/V1/user/profile/${aurotId}`,
        method: 'get'
      }
});
