import React from 'react';
import Layout from './Hoc/Layout';
import { Switch, Route } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import Home from './components/Home'
import Contact from './components/Contact';


const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route exact component={Home} path="/"/>
        <Route component={Contact} path="/contact"/>
      </Switch>
    </Layout>
  );
}

export default Routes;
