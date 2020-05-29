import React from 'react';
import cards from './IndexCards.css'

const indexCards = (props) => {

    return(
        <div className={cards.IndexCards} onClick={() => props.click(props.fbKey)} >
            <img 
                src={props.imgSource}
                alt= 'unable to load'
                className={cards.Images}
            />
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    );
}

export default indexCards;