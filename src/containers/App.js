import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Home } from "Containers";

class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        { children || <Home /> }
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node
};

App.defaultProps = {
  children: <div />
};

export default App;
