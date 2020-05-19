import React from 'react';
import classes from './NavItem.css';
import { Link } from 'react-router-dom';

const navItem = (props) => (
    <div className={classes.NavItem}>
        <Link
            to={props.link}
            className={props.active ? classes.active : null}
            onClick={props.clicked}
        >
            {props.children}
        </Link>
    </div>
);

export default navItem;