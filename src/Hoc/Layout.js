import React, { useState } from 'react';
import Aside from '../components/Sidebar/';
import MobileNav from '../components/Sidebar/mobile';

const Layout = (props) => {

    return (
      <div className="app">
        <MobileNav/>
        <Aside/>
        {props.children}
        </div>
    )
}
 
export default Layout;