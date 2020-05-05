import React from 'react';
import { useToken } from '../utils/useToken';
import Routes from '../routers/routes';

const Pages = () => {
  useToken();
  return <Routes/>;
};

export default Pages;
