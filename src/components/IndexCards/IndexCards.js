import React from 'react';
//import {Image} from 'react';
import cards from './IndexCards.css'

let selectedFile = null;

const fileSelectHandler = event => {
    selectedFile = event.target.files[0];
}

const fileUploadHandler = () => {
    //selectedFile
}

const indexCards = (props) => {
    return(
        <div className={cards.IndexCards}> 
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <input type="file" onChange={fileSelectHandler} />
            <button onClick={fileUploadHandler}>Upload</button>
        </div>
    );
}

/*<Image 
                style={{width: 250, height: 250}}
                resizeMode="contain"
                source = {{uri: props.imgSource}}
            />*/

export default indexCards;