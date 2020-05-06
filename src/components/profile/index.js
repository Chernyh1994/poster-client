import React, { useState } from 'react';

import ProfileCard from './ProfileCard';
import Navigation from './Navigation';
import UserPosts from './UserPosts';

const Profile = () => {
  const [value, setValue] = useState('posts');
  const handleChange = (evant, newValue) => {
    setValue(newValue);
  };

  console.log(value)

  return (
    <div>
      <ProfileCard/>
      <Navigation handleChange={handleChange} value={value} />
      {value === 'posts' ? <UserPosts/> : null}
    </div>
  );
};

export default Profile;
