import React, { Component } from 'react';
import classes from './Admin.css';
import DataRow from '../../components/ArtistDataRow/ArtistDataRow';

class Admin extends Component {
    render() {
        return (
            <div className={classes.Admin}>
                <h1>Admin login!</h1>
                <DataRow name={'test'} bio={'test bio'}/>
            </div>
        );
    }
}

export default Admin;