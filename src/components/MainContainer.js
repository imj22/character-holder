import React from 'react';

import { Outlet } from 'react-router-dom';


// components
import NavBar from "./NavBar";


function MainContainer() {
  return (
    <div>
        <NavBar />
        <Outlet />
    </div>
  )
}

export default MainContainer