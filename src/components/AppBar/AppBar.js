import React from 'react';
import { renderRoutes } from 'react-router-config';
import { useSelector } from 'react-redux';

import Menu from './Menu';
import NavBar from './NavBar';
import { HeaderStyled } from '../UI/StyledComponent/HeaderStyled';
import { TemplateContent } from '../UI/StyledComponent/Templates';

const AppBar = ({ route }) => {
  const classes = HeaderStyled();
  const isAuthorized = useSelector((state) => state.currentAuthUser.auth.user);

  return (
    <div>
      <div className={classes.toolbar} />
      {isAuthorized ?
        <div className={classes.root}>
          <NavBar/>
          <Menu/>
          <TemplateContent>
            <div className={classes.content}>
              {renderRoutes(route.routes)}
            </div>
          </TemplateContent>
        </div> :
        <main className={classes.content}>
          <NavBar/>
          {renderRoutes(route.routes) }
        </main>}
    </div>
  );
};

export default AppBar;
