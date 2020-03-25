import { 
  CSRF_COOKIE, 
  LOGIN_USER, 
  REGISTER_USER, 
} from '../types';

export const csrfRequest = (user) => ({
  type: CSRF_COOKIE,
  request: [{ url: `/sanctum/csrf-cookie`  }, {  url: `/api/sanctum/token`, user }]
});

export const loginUser = (user) => ({
  type: LOGIN_USER,
  request: [
    { url: `/sanctum/csrf-cookie`  }, 
    
    { 
      url: `/api/sanctum/token`, 
      method: 'post',
      data: user,
    }
  ],
})

export const registerUser = (user) => ({
  type: REGISTER_USER,
  request: [
    { url: `/sanctum/csrf-cookie`  }, 

    { 
      url: `/api/sanctum/register`, 
      method: 'post',
      data: user,
    }
  ],
})