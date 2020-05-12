import React from 'react';

const home = (props) => (
    <div style={{textAlign: 'center', color: "#0E0F1C"}}>
        <a href="/"><i class="fab fa-facebook-square fa-8x"></i></a>
        <h1>LIZARD BELLY COLLECTIVE</h1>
        <h3>A group of artists in the greater Seattle area</h3>
        <div>
            <a href="/"><i class="fab fa-facebook-square fa-2x"></i></a>
            <a href="/"><i class="fab fa-instagram fa-2x"></i></a>
            <a href="/"><i class="fab fa-twitter fa-2x"></i></a>
            <a href="/"><i class="fab fa-soundcloud fa-2x"></i></a>
        </div>
        <p>Join our newsletter to stay informed about new events and releases!</p>
        <input type="text" value="" placeholder="example@address.com" />
        <br></br>
        <p>Want to collab with our team?</p>
        <button>Contact Us</button>
    </div>
);

export default home;