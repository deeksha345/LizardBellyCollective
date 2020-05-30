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
            <h3>{props.title}</h3>
        </div>
    );
}

export default indexCards;