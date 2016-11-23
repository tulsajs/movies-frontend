import React from 'react';
import { Route } from 'react-router';
import { App, MainPage, Header } from './containers';

export default (
  <Route component={App}>
    <Route path='*' components={{header: Header, main: MainPage}} />
  </Route>
);
