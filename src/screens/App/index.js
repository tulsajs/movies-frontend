import React, { Component, Fragment } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { ThemeProvider } from 'emotion-theming';

import Home from './screens/Home';
import Info from './screens/Info';

const theme = {
  fontSizes: [12, 14, 16, 24, 32, 48, 64, 96, 128],
  breakpoints: ['32em', '48em', '64em', '80em', '96em', '112em'],
  space: [
    // margin and padding
    0,
    4,
    8,
    16,
    32,
    64,
    128,
    256
  ],
  colors: {
    blue: '#07c',
    red: '#e10'
  }
};

export default class index extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Fragment>
            <Route exact path="/" component={Home} />
            <Route path="/:id" component={Info} />
          </Fragment>
        </Router>
      </ThemeProvider>
    );
  }
}
