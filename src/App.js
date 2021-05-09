import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import TracksList from './pages/TracksList';

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exact>
          <TracksList />
        </Route>
        <Route path='/tracks/:trackID'></Route>
        <Route path='/documentation'></Route>
      </Switch>
    </BrowserRouter>
  );
};
