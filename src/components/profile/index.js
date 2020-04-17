import React from 'react';

import ProfileCard from './ProfileCard';
import Navigation from './Navigation';
import UserPosts from './UserPosts';

const Profile = () => {

  return (
    <div>
      <ProfileCard/>
      <Navigation/>
      <UserPosts/>
    </div>
  );
};

export default Profile;
