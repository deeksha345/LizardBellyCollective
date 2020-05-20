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

      this.createBoxes();

        return (
            <div className={classes.Artists}>
                <h1 style={{marginBottom: '50px'}}>Artists!</h1>
                <button style={{height:'50px', width:'100px'}} onClick={this.getMembers}>Get Data</button>
                {this.artists}
            </div>
        );
    }
}
/*
<IndexCards title={'Band1'} description={'This is the bio for Band1'}/>
<IndexCards title={'Band2'} description={'This is the bio for Band2'}/>
<IndexCards title={'Band3'} description={'This is the bio for Band3'}/>
<IndexCards title={'Band4'} description={'This is the bio for Band4'}/>
<IndexCards title={'Band5'} description={'This is the bio for Band5'}/>
*/
export default Artists;