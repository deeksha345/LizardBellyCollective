import React from 'react';
import LbcBanner from './LbcBanner/LbcBanner';
import classes from './Sidebar.css';
import NavItems from './NavItems/NavItems';

const sidebar = (props) => (
    <div className={classes.Sidebar}>
        <div className={classes.Top}>
            <LbcBanner />   
        </div>
        <div className={classes.Bottom}>
            <NavItems />
        </div>
    </div>
);

export default sidebar;