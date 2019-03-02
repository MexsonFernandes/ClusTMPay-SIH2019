import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import NotFoundPage from './pages/NotFoundPage';
import UserPage from './pages/User';
import NotificationPage from './pages/NotificationPage';
import UserBehaviour from './pages/UserBehaviour';
import GeoFencing from './pages/GeoFencing';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={DashboardPage} />
       <Route path='/dashboard' component={DashboardPage} />
        <Route path='/user' component={UserPage}/>
        <Route path='/404' component={NotFoundPage} />
        <Route path='/notifications' component={NotificationPage}/>
        <Route path = '/userbehaviour' component ={UserBehaviour}/>
        <Route path = '/geofencing'component = {GeoFencing}/>
      </Switch>
    )
  }
}

export default Routes;
