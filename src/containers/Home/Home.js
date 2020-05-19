import React, { Component } from 'react';
import classes from './Home.css';

class Home extends Component {
    render() {
        return (
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
                <div className={classes.Boxes}>
                    <div className={classes.Box}>
                        <p>Stay informed on new events and releases!</p>
                        <input type="text" value="" placeholder="example@address.com" />
                    </div>
                    <div className={classes.Box}>
                        <p>Want to collab with our team?</p>
                        <button>Contact Us</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;