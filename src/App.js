import React, { Component } from 'react';
import classes from './App.css';
import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import About from './containers/About/About';
import Events from './containers/Events/Events';
import Media from './containers/Media/Media';
import Merch from './containers/Merch/Merch';
import Epk from './containers/EPK/Epk';
import Contact from './containers/Contact/Contact';
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
                  <Route path="/events" exact component={Events} />
                  <Route path="/artists" exact component={Home} />
                  <Route path="/media" exact component={Media} />
                  <Route path="/merch" exact component={Merch} />
                  <Route path="/epk" exact component={Epk} />
                  <Route path="/contact" exact component={Contact} />
                </Backdrop>
            </Layout>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
