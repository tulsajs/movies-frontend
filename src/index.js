// import the standard react library
import React from 'react';
// import the ReactDOM library to render to the DOM.
import ReactDOM from 'react-dom';
// import the Router component and browserHistory from react-router.
// browserHistory is necessary in order to allow for catching the history of the browsers state.
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import { syncHistoryWithStore } from 'react-router-redux';

// import the routes from the routes file
import routes from './routes';
// import Redux store
import store from './store';
import './index.css';

const history = syncHistoryWithStore(browserHistory, store);

// pass the intial react component which is the router to the render method and then the element
// we would like it to render to in the initial DOM.
ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
