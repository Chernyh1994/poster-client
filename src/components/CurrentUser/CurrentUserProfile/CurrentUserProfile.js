import React from 'react';
import { useSelector } from 'react-redux';

import ProfileCard from '../../UI/Profile/ProfileCard';

const CurrentUserProfile = () => {

  const user = useSelector((state) => state.currentAuthUser.auth.user);

  return (
    <ProfileCard userProfile={user} currentUser={true}/>
  );
};

export default CurrentUserProfile;