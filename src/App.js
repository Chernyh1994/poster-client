import React from 'react';
import { Provider } from 'react-redux';
import { StylesProvider } from '@material-ui/core/styles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Pages from './pages';
import initStore from './store';

const App = () => {
  const store = initStore();

  return (
    <StylesProvider injectFirst>
      <Provider store={store}>
        <ToastContainer />
        <Pages/>
      </Provider>
    </StylesProvider>);
};

export default App;
