import React, { useEffect }from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';

import { getUser } from './store/actions/authAction';
import Pages from './pages';

const App = () => {

  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  useEffect(() => {
      if(!!token){
          dispatch(getUser());
      }
  }, [dispatch, token]);

  return (
    <StylesProvider injectFirst>
      <ToastContainer />
      <Pages/>
    </StylesProvider>
  );
};

export default App;
