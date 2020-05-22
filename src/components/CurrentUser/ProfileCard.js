import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';

import { StyledCard } from '../UI/StyledComponent/Card';
import ProfileModal from './ProfileModal';
import {
  ProfileWrap,
  UserInfoWrap,
  AvatarWrap,
  NewAvatar
} from '../UI/StyledComponent/ProfileStyled';
import { startAvatar } from '../UI/StyledComponent/Templates';
import LoadingCard from '../UI/LoadingCard';

const ProfileCard = () => {
  const user = useSelector((state) => state.currentAuthUser.auth.user);
  const userProfile = useSelector((state) => state.userReducer.userProfile);
  const classes = StyledCard();

  return (
    <Card className={classes.root}>
      {userProfile && user ?
        <ProfileWrap>
          <AvatarWrap>
            <NewAvatar
              alt="avatar"
              src={userProfile.avatar ?
                userProfile.avatar.path :
                startAvatar}
            />
          </AvatarWrap>
          <UserInfoWrap>
            <Typography className={classes.userInfoTitle} color="textSecondary">
              Name: {userProfile.name}
            </Typography>
            <Typography className={classes.userInfoTitle} color="textSecondary">
              Email: {userProfile.email}
            </Typography>
            {userProfile.id === user.id ? <ProfileModal/> : null}
          </UserInfoWrap>
        </ProfileWrap> :
        <LoadingCard/>}
    </Card>
  );
};

export default ProfileCard;
