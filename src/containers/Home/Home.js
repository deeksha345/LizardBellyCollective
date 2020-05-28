import React, { Component } from 'react';
import classes from './Home.css';
import Backdrop from '../../components/UI/Backdrop/Backdrop';

class Home extends Component {
    render() {
        return (
            <Backdrop>
                <div className={classes.Home}>
                    <a href="/"><i className="fab fa-facebook-square fa-8x"></i></a>
                    <h1>LIZARD BELLY COLLECTIVE</h1>
                    <h3>A group of artists in the greater Seattle area</h3>
                    <div>
                        <a href="/"><i className="fab fa-facebook-square fa-2x"></i></a>
                        <a href="/"><i className="fab fa-instagram fa-2x"></i></a>
                        <a href="/"><i className="fab fa-twitter fa-2x"></i></a>
                        <a href="/"><i className="fab fa-soundcloud fa-2x"></i></a>
                    </div>
                </div>
            </Backdrop>
        );
    }
}

export default Home;