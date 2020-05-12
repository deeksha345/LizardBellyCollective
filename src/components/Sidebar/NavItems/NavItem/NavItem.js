import React from 'react';
import classes from './NavItem.css';

const navItem = (props) => (
    <div className={classes.NavItem}>
        <a
            href={props.link}
            className={props.active ? classes.active : null}
        >
            {props.children}
        </a>
    </div>
);

export default navItem;