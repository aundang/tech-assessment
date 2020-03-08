import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import AppLayout from './components/AppLayout/AppLayout.jsx';

import Home from './routes/HomePage/HomePage.jsx';
import Details from './routes/DetailsPage/DetailsPage.jsx';

export const routes = [
  {
    exact: true,
    path: '/',
    component: Home
  },
  {
    exact: true,
    path:'/details/:id',
    component: Details
  }
];

export default () => (
  <Router>
    <Switch>
      <LastLocationProvider>
        <AppLayout>
          { routes.map((route, i) => (
            <Route { ...route } key={ `r-${i}` } />
          )) }
        </AppLayout>
      </LastLocationProvider>
    </Switch>
  </Router>

);
