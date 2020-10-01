import React from 'react';
import './randomQuoteStyles.css';

import Quotes from './quotes.js';


function Randomquote(){
    let random = Math.round(Math.random()*Quotes.length);

    return(
        <div className="randomquote">    
            <p>{Quotes[random]}</p>
        </div>
    )
}

export default Randomquote;
