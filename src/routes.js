import React from 'react';
// import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// App Container
import { App, Home } from 'Containers';

export default(
  <Router>
    <Route path="/" component={App}>
      <Route path="/home" component={Home} />
    </Route>
  </Router>
);