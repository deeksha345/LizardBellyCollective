import React from 'react';
import Aux from '../Aux/Aux';
import Sidebar from '../../components/Sidebar/Sidebar';
import classes from './Layout.css'

const layout = (props) => (
    <Aux>
        <Sidebar />
        <main className={classes.Content}>
            {props.children} 
        </main>
    </Aux>
);

export default layout;