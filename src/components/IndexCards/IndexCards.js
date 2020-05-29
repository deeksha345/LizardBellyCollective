import React from 'react';
import cards from './IndexCards.css'
//import { ProgressPlugin } from 'webpack';


const indexCards = (props) => {

    console.log(props.imgSource)
    return(
        <div  key={props.key} className={cards.IndexCards} >
            <img 
                src={props.imgSource}
                alt= 'unable to load'
                className={cards.Images}
            />
            <h1>{props.title}</h1>
        </div>
    );
}

/* uploaders:

            <input type="file" onChange={fileSelectHandler} />
            <button onClick={fileUploadHandler}>Upload</button>
            <p>{props.description}</p>
*/


// <img src={props.imgSource} alt='nope' height='400px' width='400px'/>

/*          
            <Image 
                style={{width: 250, height: 250}} 
                resizeMode="contain" 
                source = {{uri:'https://firebasestorage.googleapis.com/v0/b/lizardbellycollective-61b17.appspot.com/o/shitboy.png?alt=media&token=5785ba06-6b2f-4217-b31d-03fdb597de57'}} 
            />
*/

export default indexCards;