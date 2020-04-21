/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { renderRoutes } from 'react-router-config';
import { useDispatch } from 'react-redux';

import Profile from '../../components/profile';
import { getUserProfile } from '../../store/actions/userAction';


const ProfilePage = ({ route, match }) => {
  const aurotId = match.params.id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfile(aurotId));
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <div>
      <Profile/>
      {renderRoutes(route.routes)}
    </div>
  );
};

export default ProfilePage;
