import React from 'react';
import classes from './Artists.css';
import IndexCards from '../../components/IndexCards/IndexCards';
import {fsArtists} from '../../Firebase';

const Artists = () => {

  // COMPONENT STATE
  const [artistInfo, setArtistInfo] = React.useState();

  // FIREBASE FUNCTIONS
  const fetchData = () => { 
    fsArtists.get()
      .then(results => {setArtistInfo(results)})
      .catch(e => console.error(e))
  }

  // LIFECYCLE HOOKS ETC
  React.useEffect( () => { fetchData() }, [] )

  // EVENT HANDLERS
  const clickArtistHandler = (key) => { console.log(key) }

  return(     
        <div className={classes.Artists}>
          <h1>Artists!</h1>
          <div className={classes.Showcase}>
          {artistInfo ? artistInfo.docs.map (artist => (
                <div className={classes.Item} key={artist.id}>
                <IndexCards
                    key={artist.id}
                    fbKey={artist.id}
                    title={artist.data().name}
                    description={artist.data().bio}
                    imgSource={artist.data().image}
                    click={clickArtistHandler}
                />
                </div>
            )) : <p>LOADING...</p>}
          </div>
        </div>
          
    ); 
};

export default Artists;