import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import ProfileModal from '../../CurrentUser/CurrentUserProfile/CurrentUserUpdate/ProfileModal';
import LoadingCard from '../LoadingCard';
import { StyledCard } from '../StyledComponent/Card';
import {
  ProfileWrap,
  UserInfoWrap,
  AvatarWrap,
  NewAvatar
} from '../StyledComponent/ProfileStyled';
import { startAvatar } from '../StyledComponent/Image';

const ProfileCard = ({ userProfile, currentUser }) => {
  const classes = StyledCard();

  return (
    <Card className={classes.root}>
        {userProfile ?
        <ProfileWrap>
          <AvatarWrap>
            <NewAvatar
              alt="avatar"
              src={userProfile.profile ?
                userProfile.profile.avatar_path 
                :
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
            {currentUser ? <ProfileModal/> : <div></div>}
          </UserInfoWrap>
        </ProfileWrap> 
        :
        <LoadingCard/>}
    </Card>
  );
};

export default ProfileCard;