import React from 'react';
import { Switch, Route } from 'react-router-dom';
import landingpage from './landingpage';
import users from './users';
import products from './products';
import liveactivity from './liveactivity';
const Main = () => (
    <Switch>
        <Route exact path ="/" component={landingpage}/>
              <Route path="/users" component={users}/>
              <Route path="/products" component ={products}/>
              <Route path="/liveactivity" component ={liveactivity}/>
               </Switch>
)

export default Main;