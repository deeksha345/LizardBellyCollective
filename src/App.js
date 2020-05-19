import React, { Component } from 'react';
import classes from './App.css';
import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import About from './containers/About/About';
import Backdrop from './components/UI/Backdrop/Backdrop';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className={classes.App}>
            <Layout>
                <Backdrop>
                  <Route path="/" exact component={Home} />
                  <Route path="/about" exact component={About} />
                </Backdrop>
            </Layout>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
