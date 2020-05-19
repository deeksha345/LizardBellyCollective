import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import classes from './LbcBanner.css';

const lbcBanner = (props) => (
    <Aux>
        {/* logo component */}
        <a href="/"><i className="fab fa-facebook-square fa-5x"></i></a>
        <h1>Lizard Belly</h1>
        <div className={classes.Icons}>
            <a href="/"><i className="fab fa-facebook-square fa-2x"></i></a>
            <a href="/"><i className="fab fa-instagram fa-2x"></i></a>
            <a href="/"><i className="fab fa-twitter fa-2x"></i></a>
            <a href="/"><i className="fab fa-soundcloud fa-2x"></i></a>
        </div>
    </Aux>
);

export default lbcBanner;