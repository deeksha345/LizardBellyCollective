import React, { Component } from 'react';
import classes from './App.css';
import Layout from './hoc/Layout/Layout';
import Home from './components/Home/Home';
import Backdrop from './components/UI/Backdrop/Backdrop';
import backdrop from './components/UI/Backdrop/Backdrop';

class App extends Component {
  render() {
    return (
        <div className={classes.App}>
            
            <Layout>
                <Backdrop>
                    <Home />
                </Backdrop>
            </Layout>
        </div>
    );
  }
}

export default App;
