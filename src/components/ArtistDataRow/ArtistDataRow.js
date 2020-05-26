import React from 'react';
import ArtistDataRow from './ArtistDataRow.css';

const DataRow = (props) => {
    return(
        <div>
            <div style={ArtistDataRow}>
                <p>Image:</p>
                <input type="file"/>
                <p>Artist Name:</p>
                <input type="text" value={props.name}/>
                <p>Bio:</p>
                <input type="text" value={props.bio}/>
            </div>
            <div style={ArtistDataRow}>
                
                <p>Instagram URL:</p>
                <input type="text" value={props.instagram}/>
                <p>Twitter URL:</p>
                <input type="text" value={props.twitter}/>
                <p>Twitch URL:</p>
                <input type="text" value={props.twitch}/>
                <p>Spotify URL:</p>
                <input type="text" value={props.spotify}/>
                <p>Soundcloud URL:</p>
                <input type="text" value={props.soundcloud}/>
                <p>Bandcamp URL:</p>
                <input type="text" value={props.bandcamp}/>
                <p>Youtube URL:</p>
                <input type="text" value={props.youtube}/>
                <p>Facebook URL:</p>
                <input type="text" value={props.facebookn}/>
            </div>
        </div>
    );
}

export default DataRow;