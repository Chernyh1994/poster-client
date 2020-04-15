import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Pages from './pages';
import { useGetUser } from './utils/useGetUser';
import { useToken } from './utils/useToken';

const App = () => {
  useGetUser();
  useToken();
  return (
    <StylesProvider injectFirst>
      <ToastContainer />
      <Pages/>
    </StylesProvider>);
};

export default App;
