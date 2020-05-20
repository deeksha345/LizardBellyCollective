import React, { Component } from 'react';
import classes from './Artists.css';
import IndexCards from '../../components/IndexCards/IndexCards';
import axios from '../../axios-init';

class Artists extends Component {

    // Sets up Axios (in the middle of creating this now)
    constructor(){
        super();
        axios.interceptors.request.use(req =>{
            return req;
          });
        axios.interceptors.response.use(res => res, error => {
            console.log(error);
          })
    }

    // Display a spinner on initial render

    // fetch data

    // Create block saying "if database data exists, map data to cards"


    render() {
        return (
            <div className={classes.Artists}>
                <h1 style={{marginBottom: '50px'}}>Artists!</h1>
                <IndexCards title={'Band1'} description={'This is the bio for Band1'}/>
                <IndexCards title={'Band2'} description={'This is the bio for Band2'}/>
                <IndexCards title={'Band3'} description={'This is the bio for Band3'}/>
                <IndexCards title={'Band4'} description={'This is the bio for Band4'}/>
                <IndexCards title={'Band5'} description={'This is the bio for Band5'}/>
            </div>
        );
    }
}

export default Artists;