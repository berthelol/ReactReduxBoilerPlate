import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import config from 'react-global-configuration';
import { Router, browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import reducers from 'Redux/reducers';

import configuration from './config';
import routes from './routes';
import './index.css';

import * as serviceWorker from './serviceWorker';

config.set(configuration);

/* eslint-disable no-underscore-dangle */
const middleware = routerMiddleware(browserHistory);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
  applyMiddleware(thunk, middleware)
));
/* eslint-enable */

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
