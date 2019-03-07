import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

class App extends React.Component{
  render() {
    return (
      <div>
        <h1>My Notes</h1>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default connect()(App);
