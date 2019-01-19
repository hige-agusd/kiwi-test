import React, { Component } from 'react';
import './App.css';
import {Grid} from 'react-bootstrap';
import Screen from './containers/Screen/Screen';
import Pad from './containers/Pad/Pad';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
}
  render() {
    return (
      <Grid className="App">
        <Screen />
        <Pad />
      </Grid>
    );
  }
}

export default App;
