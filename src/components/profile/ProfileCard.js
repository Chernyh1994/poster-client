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
import { startAvatar } from '../styledComponent/Link';

const ProfileCard = () => {
  const { user } = useSelector((state) => state.authReducer);
  const classes = StyledCard();

  return (
    <Card className={classes.root}>
      <ProfileWrap>
        <AvatarWrap>
          <NewAvatar
            alt="avatar"
            src={user.avatar_path ?
              `http://localhost:8000/storage/${user.avatar_path}` :
              startAvatar}
          />
        </AvatarWrap>
        <UserInfoWrap>
          <Typography className={classes.userInfoTitle} color="textSecondary">
            Name: {user.name}
          </Typography>
          <Typography className={classes.userInfoTitle} color="textSecondary">
            Email: {user.email}
          </Typography>
          <ProfileModal/>
        </UserInfoWrap>
      </ProfileWrap>
    </Card>
  );
};

export default ProfileCard;
