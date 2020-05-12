import React from 'react';
import Button from '../../UI/Button/Button';
import classes from './NavItems.css';

const navItems = (props) => (
    <div>
        <Button>Home</Button>
        <Button>About Us</Button>
        <Button>Events</Button>
        <Button>Artists</Button>
        <Button>Media</Button>
        <Button>Merch</Button>
        <Button>EPK</Button>
        <Button>Contact Us</Button>
    </div>
);

export default navItems;