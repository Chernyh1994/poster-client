import { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';

import { getUser } from '../store/actions/authAction';

// eslint-disable-next-line import/prefer-default-export
export const GetUser = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  useEffect(() => {
    if (token) {
      dispatch(getUser());
    }
  }, [dispatch, token]);
};