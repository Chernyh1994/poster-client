import React from 'react';
import Navbar from '../../components/Navbar';
import { renderRoutes } from "react-router-config";


const Header = ({route}) => {
  
    return(
        <div>
            <Navbar/>
            {renderRoutes(route.routes)}
        </div>
    )
};

export default Header;