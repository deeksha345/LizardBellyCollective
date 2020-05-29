import React from 'react';
import Firebase from '../../Firebase';
import classes from './ArtistDataRow.css';
import IndexCards from '../IndexCards/IndexCards';
import ArtistDataForm from '../ArtistDataForm/ArtistDataForm';

const DataRow = (props) => {

    const [artistInfo, setArtistInfo] = React.useState();
    const [selectedArtist, setSelectedArtist] = React.useState({
        name: "New Artist",
        bio: "",
        image: "https://firebasestorage.googleapis.com/v0/b/lizardbellycollective-61b17.appspot.com/o/lbc%20_%20coin%20logo%20_%20main%201.png?alt=media&token=e47ae18a-3c40-4400-84e5-9cd78a6bcd54",
        socials:{
            bandcamp: "",
            facebook: "",
            instagram: "",
            soundcloud: "",
            spotify: "",
            twitch: "",
            twitter: "",
            youtube: ""
        }
    });

    const fetchData = async () => {
        const db = Firebase.firestore();
        const data = await db.collection('artists').get();
        setArtistInfo(data)
      }

    // GET DATA FROM FIREBASE, store in State
    React.useEffect( () => { fetchData() }, [] )

    // UPLOAD IMAGE HANDLER
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

    // TEXBOX HANDLER
    const textEnteredHandler = (event, social) => {

        let dummyArtist = {...selectedArtist}

        if(social)
            dummyArtist.socials[event.target.name] = event.target.value;
        else
            dummyArtist[event.target.name] = event.target.value;
     
        setSelectedArtist(dummyArtist)
    }

    // UPLOAD DATA HANDLER
    const uploadDataHandler = () => {
        const artistRef = Firebase.firestore().collection('artists');
        const artistKey = selectedArtist.name;

        artistRef.doc(artistKey)
            .set(selectedArtist)
            .then(fetchData);

    }

    // ARTIST SELECT HANDLER
    const artistSelectHandler = (key) => {
        //Get and display info from selected card
        let db = Firebase.firestore();
        let coll = db.collection('artists').doc(key);
        coll.get()
            .then(doc => {
                if (!doc.exists) {
                console.log('No such document!');
                } else {
                console.log('Document data:', doc.data());
                setSelectedArtist(doc.data())
                }
            })
            .catch(err => {
                console.log('Error getting document', err);
            });
    }

    console.log(selectedArtist)
    // JSX
    return(
        <div className={classes.ArtistDataRow}>
            {<ArtistDataForm
                imageSelected={uploadImageHandler}
                saveButton={uploadDataHandler}
                selectedArtist={selectedArtist}
                textEntered={textEnteredHandler}
            />}
            <div className={classes.Section}>
            {artistInfo ? artistInfo.docs.map (artist => (
                <div className={classes.Item} key={artist.id}>
                <IndexCards
                    key={artist.id}
                    fbKey={artist.id}
                    title={artist.data().name}
                    description={artist.data().bio}
                    imgSource={artist.data().image}
                    click={artistSelectHandler}
                />
                </div>
            )) : <p>NOPE</p>}
            </div>
            
        </div>
    );
}

export default DataRow;