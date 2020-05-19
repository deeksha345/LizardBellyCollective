import React from 'react';
import classes from './PhoneSidebar.css';
import NavItems from '../Sidebar/NavItems/NavItems';

const sidebar = (props) => {
    let allClasses = [classes.Sidebar, classes.Close]
    if (props.open) {
        allClasses = [classes.Sidebar, classes.Open]
    }

    return (
        <div className={allClasses.join(" ")}>
            <div className={classes.X}>
                <h1 onClick={props.close}>X</h1>
            </div>
            <div className={classes.Bottom}>
                <NavItems closeSidebar={props.close}/>
            </div>
        </div>
    );
    
}

export default sidebar;