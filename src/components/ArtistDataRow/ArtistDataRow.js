import React from 'react';
import Firebase from '../../Firebase';
import classes from './ArtistDataRow.css';
import IndexCards from '../IndexCards/IndexCards';

const DataRow = (props) => {

    const [artistInfo, setArtistInfo] = React.useState();
    const [selectedArtist, getSelectedArtist] = React.useState();

    // GET DATA FROM FIREBASE, store in State
    React.useEffect( () => {
        const fetchData = async () => {
          const db = Firebase.firestore();
          const data = await db.collection('artists').get();
          setArtistInfo(data)
        }
        fetchData()
      }, [] )

    // UPLOAD IMAGE TO STORAGE
    const uploadImageHandler = (event) => {

        const storageRef = Firebase.storage().ref();
        const file = event.target.files[0];

        storageRef.child(file.name)
            .put(file)
            .then( (snapshot) => {
            console.log('uploaded a file');
            snapshot.ref.getDownloadURL().then((downloadURL) => {
                console.log('file available at ', downloadURL);
            })});
    }

    // UPLOAD DATA TO STORAGE
    const uploadDataHandler = (event) => {
        const artistRef = Firebase.firestore().collection('artists');
        const artistKey = '8QW0luJyZK5HFmGBJ7eo';
        let newData = {
            name: "nuBand1",
            bio: "WeRock",
            image: null,
            socials: {
                facebook: "",
                instagram: ""
            }
        };

        console.log(artistInfo.docs[0].id, artistInfo.docs[0].data());
        artistRef.doc(artistKey).set(newData);

    }
    
    // JSX
    return(
        <div className={classes.ArtistDataRow}>
            <div className={classes.Section}>
                <div>
                    <p>Image:</p>
                    {/*
                    <img 
                    src={props.imgSource}
                    alt= 'unable to load'
                    className={cards.Images}
                    />
                    */}
                    <input type="file" onChange={uploadImageHandler}/>
                </div>
                <p>Artist Name:</p>
                <input type="text" value={props.name}/>
                <p>Bio:</p>
                <input type="text" value={props.bio}/>
            </div>
            <div className={classes.Section}>
                <div className={classes.Item}>
                <p>Instagram:</p>
                <input type="text" value={props.instagram}/>
                </div>
                <div className={classes.Item}>
                <p>Twitter:</p>
                <input type="text" value={props.twitter}/>
                </div>
                <div className={classes.Item}>
                <p>Twitch:</p>
                <input type="text" value={props.twitch}/>
                </div>
                <div className={classes.Item}>
                <p>Spotify:</p>
                <input type="text" value={props.spotify}/>
                </div>
                <div className={classes.Item}>
                <p>Soundcloud:</p>
                <input type="text" value={props.soundcloud}/>
                </div>
                <div className={classes.Item}>
                <p>Bandcamp:</p>
                <input type="text" value={props.bandcamp}/>
                </div>
                <div className={classes.Item}>
                <p>Youtube:</p>
                <input type="text" value={props.youtube}/>
                </div>
                <div className={classes.Item}>
                <p>Facebook:</p>
                <input type="text" value={props.facebookn}/>
                <input type="button" onClick={uploadDataHandler} ></input>
                </div>
            </div>
            
        </div>
    );
}

export default DataRow;