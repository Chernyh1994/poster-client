import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ProfileCard from '../UI/Profile/ProfileCard';
import { getUserProfile } from '../../store/usersProfile/actions';

const ProfileUsers = ({props}) => {

  const dispatch = useDispatch();
  const userId = props.match.params.id;
  const [userProfile, setUserProfile] = useState(false)

  useEffect(() => {
    dispatch(getUserProfile(userId))
      .then((successAction) => setUserProfile(successAction.response.data.user))
      .catch((errorOrAbortAction) => console.log(errorOrAbortAction));
  }, [dispatch, userId]);

  return (
    <ProfileCard userProfile={userProfile} currentUser={false}/>
  );
};

export default ProfileUsers;