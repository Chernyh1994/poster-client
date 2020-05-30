import React from 'react';
import { useSelector } from 'react-redux';
import { renderRoutes } from 'react-router-config';

import CurrentUserProfile from './CurrentUserProfile/CurrentUserProfile';
import Navigation from './CurrentUserInfo/Navigation';
import EmptyContentCard from '../UI/EmptyContentCard';

const PersonalArea = ({ route }) => {
  const user = useSelector((state) => state.currentAuthUser.auth.user);

  return (
    user ?
    <div>
      <CurrentUserProfile/>
      <Navigation userName={user.name}/>
      {renderRoutes(route.routes)}
    </div>
    :
    <EmptyContentCard/>
  );
};

export default PersonalArea;
