import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import LbcBanner from './LbcBanner/LbcBanner';
import classes from './Sidebar.css';
import NavItems from './NavItems/NavItems';

const sidebar = (props) => (
    <div className={classes.Sidebar}>
        <LbcBanner />
        <NavItems />
    </div>
);

export default sidebar;