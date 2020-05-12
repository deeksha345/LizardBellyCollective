import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import classes from './LbcBanner.css';

const lbcBanner = (props) => (
    <Aux>
        {/* logo component */}
        <p>**logo here**</p>
        <h1>Lizard Belly</h1>
        <div className={classes.Icons}>
            <a href="/"><i class="fab fa-facebook-square fa-2x"></i></a>
            <a href="/"><i class="fab fa-instagram fa-2x"></i></a>
            <a href="/"><i class="fab fa-twitter fa-2x"></i></a>
            <a href="/"><i class="fab fa-soundcloud fa-2x"></i></a>
        </div>
    </Aux>
);

export default lbcBanner;