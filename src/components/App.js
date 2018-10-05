import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import withRoot from '../withRoot';
class App extends Component {
  render() {
    return <div />;
  }
}

export default App;

App.propTypes = { classes: PropTypes.object.isRequired };

export default withRoot(withStyles(styles)(App))