import React from 'react';
import classes from './ArtistDataRow.css';

const DataRow = (props) => {
    return(
        <div className={classes.ArtistDataRow}>
            <div className={classes.Section}>
                <p>Image:</p>
                <input type="file"/>
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
                </div>
            </div>
        </div>
    );
}

export default DataRow;