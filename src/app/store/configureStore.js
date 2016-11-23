import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import { persistState } from 'redux-devtools';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import {browserHistory} from 'react-router';

export default function configureStore (initialState) {
  let enhancer;
  const middleware = applyMiddleware(thunk, routerMiddleware(browserHistory));

  if (process.env.NODE_ENV !== 'production') {
    let getDebugSessionKey = function () {
      // By default we try to read the key from ?debug_session=<key> in the address bar
      const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
      return (matches && matches.length) ? matches[1] : null;
    };

    enhancer = compose(
      middleware,
      window.devToolsExtension ? window.devToolsExtension() : require('./DevTools').default.instrument(),
      // Optional. Lets you write ?debug_session=<key> in address bar to persist debug sessions
      persistState(getDebugSessionKey())
    );
  } else {
    enhancer = compose(middleware);
  }

  const store = createStore(rootReducer, initialState, enhancer);

  // Enable Webpack hot module replacement for reducers
  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers').default)
    );
  }

  return store;
}
