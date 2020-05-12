import React from 'react';
import NavItem from './NavItem/NavItem';
import classes from './NavItems.css';

const navItems = (props) => (
    <div className={classes.NavItems}>
        <NavItem link='/' active>Home</NavItem>
        <NavItem link='/'>About Us</NavItem>
        <NavItem link='/'>Events</NavItem>
        <NavItem link='/'>Artists</NavItem>
        <NavItem link='/'>Media</NavItem>
        <NavItem link='/'>Merch</NavItem>
        <NavItem link='/'>EPK</NavItem>
        <NavItem link='/'>Contact Us</NavItem>
    </div>
);

export default navItems;