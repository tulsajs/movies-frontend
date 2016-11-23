// Lets import the styles which will be compiled into inline styles once the app is built.
import '../style/app.scss';
// import the standard react library
import React from 'react';
// import the ReactDOM library to render to the DOM.
import ReactDOM from 'react-dom';
// import the Router component and browserHistory from react-router.
// browserHistory is necessary in order to allow for catching the history of the browsers state.
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { syncHistoryWithStore } from 'react-router-redux';
// import the routes from the routes file
import routes from './routes';

export const store = configureStore();
// get the element we want to take from the initial dom and compose into the react element.
const rootElement = document.getElementById('main');
const history = syncHistoryWithStore(browserHistory, store);

// create a wrapper around the Router component and pass in the routes.
let element = (
  <div>
    <Router history={history} routes={routes} />
  </div>
);

// pass the intial react component which is the router to the render method and then the element
// we would like it to render to in the initial DOM.
ReactDOM.render(
  <Provider store={store}>
    {element}
  </Provider>,
  rootElement
);
