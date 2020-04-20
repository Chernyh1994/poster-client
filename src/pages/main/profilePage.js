/* eslint-disable react/prop-types */
import React from 'react';
import { renderRoutes } from 'react-router-config';

import Profile from '../../components/profile';


const ProfilePage = ({ route }) => (
  <div>
    <Profile/>
    {renderRoutes(route.routes)}
  </div>
);

export default ProfilePage;
