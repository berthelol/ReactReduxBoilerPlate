import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { startUser } from "Redux/actions";

class App extends Component {
  componentWillMount() {
    const { startUser } = this.props;
    startUser();
  }

  render() {
    const { userStatus } = this.props;
    return (
      <div>
        { userStatus }
      </div>
    );
  }
}

function mapStateToProps ({ user }) {
  const { userStatus } = user;

  return { userStatus };
}

App.propTypes = {
  startUser: PropTypes.func.isRequired,
  userStatus: PropTypes.string
};

App.defaultProps = {
  userStatus: ""
};

export default connect(mapStateToProps, { startUser })(App);
