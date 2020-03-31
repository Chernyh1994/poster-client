import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Pages from './pages';

const App = () => {
  return (
    <StylesProvider injectFirst>
      <ToastContainer />
      <Pages/>
    </StylesProvider>
  );
};

export default App;
