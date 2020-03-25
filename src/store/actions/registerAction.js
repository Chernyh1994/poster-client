import { 
  CSRF_COOKIE, 
  LOGIN_USER, 
  REGISTER_USER, 
} from '../types';

export const csrfRequest = () => ({
  type: CSRF_COOKIE,
  request: [{ url: `/sanctum/csrf-cookie`  }]
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
  meta: {
    getData: 
      data => {
        window.localStorage.setItem('token', data[1].token)
        return data
      }
  }
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
  meta: {
    getData: 
      data => {
        window.localStorage.setItem('token', data[1].token)
        return data
      }
  }
})

