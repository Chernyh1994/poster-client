import { useSelector } from 'react-redux';
import instanceAxios from './instanceAxios';

// eslint-disable-next-line import/prefer-default-export
export const useToken = () => {
  const localStorageToken = localStorage.getItem('token');
  const token = useSelector((state) => state.authReducer.token);
  if (token) {
    instanceAxios.defaults.headers.Authorization = `Bearer ${token}`;
  }
  instanceAxios.defaults.headers.Authorization = `Bearer ${localStorageToken}`;
};
