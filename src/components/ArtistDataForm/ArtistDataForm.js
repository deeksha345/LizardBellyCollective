import React from 'react';
import classes from './ArtistDataForm.css';

const artistDataForm = (props) => {

    const uploadButton = React.createRef();

    return(
        <div className={classes.Form}>
            <div className={classes.Section}>
                <div className={classes.Item}>
                    {<img
                        name= 'Image' 
                        alt= 'unable to load'
                        className={classes.Image}
                        src={props.selectedArtist.image}
                    />}
                    <input type="file" ref={uploadButton} style={{display: 'none'}} onChange={props.imageSelected}/>
                    <input type='button' onClick={() => uploadButton.current.click()} value={'Browse...'}/>
                </div>
                <div className={classes.Item}>
                    <p>Artist Name:</p>
                    <input name="name" type="text" value={props.selectedArtist.name} onChange={(event) => props.textEntered(event, false)}/>
                </div>
                <div className={classes.Item}>
                    <p>Bio:</p>
                    <input name="bio" type="text" value={props.selectedArtist.bio} onChange={(event) => props.textEntered(event, false)}/>
                </div>
            </div>
            <div className={classes.Section} style={{paddingBottom: '30px', border: '1px solid silver', borderRadius: '10px'}}>
                <div className={classes.Item}>
                <p>Instagram:</p>
                <input name='instagram' type="text" value={props.instagram} onChange={(event) => props.textEntered(event, true)}/>
                </div>
                <div className={classes.Item}>
                <p>Twitter:</p>
                <input name='twitter' type="text" value={props.twitter} onChange={(event) => props.textEntered(event, true)}/>
                </div>
                <div className={classes.Item}>
                <p>Twitch:</p>
                <input name='twitch' type="text" value={props.twitch} onChange={(event) => props.textEntered(event, true)}/>
                </div>
                <div className={classes.Item}>
                <p>Spotify:</p>
                <input name='spotify' type="text" value={props.spotify} onChange={(event) => props.textEntered(event, true)}/>
                </div>
                <div className={classes.Item}>
                <p>Soundcloud:</p>
                <input name='soundcloud' type="text" value={props.soundcloud} onChange={(event) => props.textEntered(event, true)}/>
                </div>
                <div className={classes.Item}>
                <p>Bandcamp:</p>
                <input name='bandcamp' type="text" value={props.bandcamp} onChange={(event) => props.textEntered(event, true)}/>
                </div>
                <div className={classes.Item}>
                <p>Youtube:</p>
                <input name='youtube' type="text" value={props.youtube} onChange={(event) => props.textEntered(event, true)}/>
                </div>
                <div className={classes.Item}>
                <p>Facebook:</p>
                <input name='facebook' type="text" value={props.facebook} onChange={(event) => props.textEntered(event, true)}/>
                </div>    
            </div>
            <div className={classes.Section} style={{marginTop: '20px'}}>
            <input style={{fontSize: '36px'}} type='button' value={'DELETE'} onClick={props.deleteArtist } />
            <input style={{fontSize: '36px'}} type="button" value={'SAVE'} onClick={props.saveButton} />
            </div>
            
        </div>
    );
}

export default artistDataForm;