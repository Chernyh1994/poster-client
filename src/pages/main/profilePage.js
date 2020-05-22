import React, { useEffect } from 'react';
import { renderRoutes } from 'react-router-config';
import { useDispatch } from 'react-redux';

import PersonalArea from '../../components/CurrentUser/PersonalArea';
import { getUserProfile } from '../../store/usersProfile/actions';

const ProfilePage = ({ route, match }) => {
  const aurotId = match.params.id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfile(aurotId));
  }, [dispatch, aurotId]);

  return (
    <div>
      <PersonalArea/>
      {renderRoutes(route.routes)}
    </div>
  );
};

export default ProfilePage;
