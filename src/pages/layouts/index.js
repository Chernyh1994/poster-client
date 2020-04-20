/* eslint-disable react/prop-types */
import React from 'react';
import { renderRoutes } from 'react-router-config';
import { useSelector } from 'react-redux';

import Menu from '../../components/Menu';
import Navbar from '../../components/Navbar';
import { HeaderStyled } from '../../components/styledComponent/HeaderStyled';
import { TemplateContent } from '../../components/styledComponent/Templates';

// eslint-disable-next-line react/prop-types
const Header = ({ route }) => {
  const classes = HeaderStyled();
  const { user } = useSelector((state) => state.authReducer);

  return (
    <div>
      <div className={classes.toolbar} />
      {!user ?
        <main className={classes.content}>
          <Navbar/>
          {renderRoutes(route.routes) }
        </main> :
        <div className={classes.root}>
          <Menu/>
          <Navbar/>
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
