import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import TracksList from './pages/TracksList';
import TrackDetails from './pages/TrackDetails';
import Documentation from './pages/Documentation'

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exact>
          <TracksList />
        </Route>
        <Route path='/tracks/:trackID'>
          <TrackDetails />
        </Route>
        <Route path='/Documentation'>
          <Documentation />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
