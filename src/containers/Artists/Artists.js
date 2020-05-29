import React from 'react'; //{ Component } from 'react';
import classes from './Artists.css';
import IndexCards from '../../components/IndexCards/IndexCards';
//import axios from '../../axios-init';
import Firebase from '../../Firebase';

const Artists = () => {

  const [getArtists, setArtists] = React.useState([]);

  React.useEffect( () => {
    const fetchData = async () => {
      const db = Firebase.firestore();
      const data = await db.collection('artists').get();
      setArtists(data.docs.map(doc => doc.data()))
    }
    fetchData()
  }, [] )

  if(getArtists.length > 0)
    console.log(getArtists[0]);

  return(
        
        <div className={classes.Artists}>
          <h1>Artists!</h1>
          <div className={classes.Showcase}>
            {getArtists.map(artist => (
              <div className={classes.Item}>
                <IndexCards
                    title={artist.name}
                    description={artist.bio}
                    imgSource={artist.image}
                />
              </div>
            ))}
          </div>
        </div>
          
    ); 
};







/*
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
        this.artists = Object.entries(this.state.artists).map((artist) => {
            return(
            <div>
              <IndexCards
                  key={artist[0]}
                  title={artist[1].name}
                  description={artist[1].bio}
                  imgSource={artist[1].image}
              />
            </div>
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
    /*
    // request data
    getMembers = () => {
      axios.get('https://lizardbellycollective-61b17.firebaseio.com/members.json')
      .then(response => { this.setState({artists: response.data, hasData: true}) })
      .catch(error => console.log(error));
    }

    //accept file input
    fileSelectHandler = event => {
      console.log(event.target);
    }

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
*/
export default Artists;