import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Switch, Route } from 'react-router-dom';

import HeroBanner from '../components/HeroBanner';

const Layout = (props) => {
    return (  
        <div>
            <Switch>
                <Route exact component={HeroBanner} path="/"/>
            </Switch>
        <Navbar/> 
        {props.children}
        </div>
    )
}
 
export default Layout;