import React, { Component } from 'react';
import classes from './App.css';
import Layout from './hoc/Layout/Layout';
import Home from './components/Home/Home';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <Home />
        </Layout>
      </div>
    );
  }
}

export default App;
