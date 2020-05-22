import React from 'react';
import { renderRoutes } from 'react-router-config';
import { useSelector } from 'react-redux';

import Menu from '../../components/AppBar/Menu';
import NavBar from '../../components/AppBar/NavBar';
import { HeaderStyled } from '../../components/styledComponent/HeaderStyled';
import { TemplateContent } from '../../components/styledComponent/Templates';

const Header = ({ route }) => {
  const classes = HeaderStyled();
  const user = useSelector((state) => state.currentAuthUser.auth.user);

  return (
    <div>
      <div className={classes.toolbar} />
      {!user ?
        <main className={classes.content}>
          <NavBar/>
          {renderRoutes(route.routes) }
        </main> :
        <div className={classes.root}>
          <Menu/>
          <NavBar/>
          <TemplateContent>
            <div className={classes.content}>
              {renderRoutes(route.routes)}
            </div>
          </TemplateContent>
        </div> }
    </div>
  );
};

export default Header;
