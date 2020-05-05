import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';

import { StyledCard } from '../styledComponent/Card';
import ProfileModal from './ProfileModal';
import {
  ProfileWrap,
  UserInfoWrap,
  AvatarWrap,
  NewAvatar
} from '../styledComponent/ProfileStyled';
import { startAvatar } from '../styledComponent/Templates';

const ProfileCard = () => {
  const user = useSelector((state) => state.authReducer.user);
  const userProfile = useSelector((state) => state.userReducer.userProfile);
  const classes = StyledCard();
  return (
    <Card className={classes.root}>
      {userProfile ?
        <ProfileWrap>
          <AvatarWrap>
            <NewAvatar
              alt="avatar"
              src={userProfile.avatar_path ?
                `http://localhost:8000/storage/${userProfile.avatar_path}` :
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
            { userProfile.id === user.id ? <ProfileModal/> : null }
          </UserInfoWrap>
        </ProfileWrap> : null}
    </Card>
  );
};

export default ProfileCard;
