import React from 'react';
import classes from './Button.css';

const button = (props) => (
    <button className={classes.Button}><h3>{props.children}</h3></button>
);

export default button;