import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import LbcBanner from './LbcBanner/LbcBanner';
import classes from './Sidebar.css';
import NavItems from './NavItems/NavItems';

const sidebar = (props) => (
    <div className={classes.Sidebar}>
        <div style={{height: '25%', paddingBottom: '10px'}}>
            <LbcBanner />   
        </div>
        <div style={{height: '60%'}}>
            <NavItems />
        </div>
    </div>
);

export default sidebar;