import React, { Component } from 'react';
import classes from './Artists.css';
import IndexCards from '../../components/IndexCards/IndexCards';
import axios from '../../axios-init';

class Artists extends Component {

    // Sets up Axios (in the middle of creating this now)

    constructor () {
        super();
        axios.interceptors.request.use(req =>{
            return req;
          });
        axios.interceptors.response.use(res => res, error => {
            console.log(error);
          });
    }

    state = {artists: {}, hasData: false}
    
    // create boxes ** Display a spinner on initial render **

    artists = null;

    createBoxes = () =>{
        //console.log(this.state.artists);
        this.artists = Object.entries(this.state.artists).map((artist) => {
            return(
            <IndexCards
                key={artist[0]}
                title={artist[1].name}
                description={artist[1].bio}
            />
            );
        }); 
    }
    
    // push data

    /*createMemberHandler = () =>{
      profiles.map((profile) => {
      axios.post('/members.json', profile)
        .then(response => console.log(response))
        .catch(error => console.log(error));
      })
    }*/
    
    // request data

    getMembers = () => {
      axios.get('https://lizardbellycollective-61b17.firebaseio.com/members.json')
      .then(response => {
        this.setState({hasData: true}); 
        this.setState({artists: response.data}); 
        this.createBoxes();})
      .catch(error => console.log(error));
    }

    // Create block saying "if database data exists, map data to cards"

    render() {

      if(!this.state.hasData){this.getMembers();}
      this.createBoxes();

        return (
            <div className={classes.Artists}>
                <h1 style={{marginBottom: '50px'}}>Artists!</h1>                
                {this.artists}
            </div>
        );
    }
}

export default Artists;