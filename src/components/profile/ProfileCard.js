import React, { useState, useEffect } from 'react';
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

const ProfileCard = () => {
  const { user } = useSelector((state) => state.authReducer);
  const classes = StyledCard();
  const startAvatar = 'https://www.mattmovingsystems.com/root/images/profile_user.gif';
  const [imagePreviewUrl, setImagePreviewUrl] = useState(startAvatar);

  useEffect(() => {
    if (user.avatar_path) {
      setImagePreviewUrl(`http://localhost:8000/storage/${user.avatar_path}`);
    }
  }, [user.avatar_path]);

  return (
    <Card className={classes.root}>
      <ProfileWrap>
        <AvatarWrap>
          <NewAvatar alt="avatar" src={imagePreviewUrl}/>
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
