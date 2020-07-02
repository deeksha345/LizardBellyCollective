import React from 'react';
import {fsArtists, fsStorage} from '../../Firebase';
import classes from './ArtistDataRow.css';
import IndexCards from '../IndexCards/IndexCards';
import ArtistDataForm from '../ArtistDataForm/ArtistDataForm';

const DataRow = (props) => {

    // INITIAL VARS
    const newArtist = {
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
    }

    // COMPONENT STATE
    const [loadMessage, setLoadMessage] = React.useState('Loading...')
    const [artistInfo, setArtistInfo] = React.useState();
    const [selectedArtist, setSelectedArtist] = React.useState(newArtist);

    // FUNCTIONS
    const fetchData = () => { 
        fsArtists.get()
            .catch(error => {
                console.error(error);
                setLoadMessage('Something went wrong :(');
            })
            .then(results => {
                console.log(results.docs[0].data().bio)
                setArtistInfo(results)
            })
    }

    // LIFECYCLE HOOKS ETC
    React.useEffect( () => { fetchData() }, [] )

    // EVENT HANDLERS
    const textEnteredHandler = (event, social) => {
        let dummyArtist = {...selectedArtist}

        if(social)
            dummyArtist.socials[event.target.name] = event.target.value
        else
            dummyArtist[event.target.name] = event.target.value
     
        setSelectedArtist(dummyArtist)
    }

    const uploadDataHandler = () => {
        fsArtists.doc(selectedArtist.name)
            .set(selectedArtist)
            .then(fetchData)
            .catch(e => {
                console.error(e);
            })
    }

    const uploadImageHandler = (event) => {
        const file = event.target.files[0];

        fsStorage.child(file.name).put(file)
            .then( snapshot => {
            snapshot.ref.getDownloadURL()
                .then((downloadURL) => {
                    let dummyArtist = {...selectedArtist};
                    dummyArtist.image = downloadURL;
                    setSelectedArtist(dummyArtist);})
            })
            .catch(e => console.error(e));
    }

    const artistSelectHandler = (key) => {
        fsArtists.doc(key).get()
            .then(doc => {
                if (!doc.exists) {
                console.log('No such document!');
                } else {
                window.scrollTo(0, 0);
                setSelectedArtist(doc.data())
                }
            })
            .catch(e => console.error(e));
    }

    const deleteArtistHandler = () => {
        fsArtists.doc(selectedArtist.name).delete()
            .then(fetchData)
            .catch(e => console.error(e))
    }

    // JSX JSX JSX JSX JSX JSX JSX JSX JSX JSX JSX JSX JSX JSX JSX JSX JSX JSX JSX JSX JSX JSX JSX JSX
    return(
        <div className={classes.ArtistDataRow}>
            <div className={classes.Section}>
            {<ArtistDataForm
                imageSelected={uploadImageHandler}
                saveButton={uploadDataHandler}
                selectedArtist={selectedArtist}
                textEntered={textEnteredHandler}
                deleteArtist={deleteArtistHandler}
            />}
            </div>

            <h2>Artists</h2>
            
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
                )) : <p>{loadMessage}</p>}
            </div>
            
        </div>
    );
}

export default DataRow;