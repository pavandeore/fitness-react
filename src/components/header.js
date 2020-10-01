import React from 'react';
import './headerStyles.css';

import RandomQuote from './randomquote';

function Header(){
    return(
        <div className="header">
            <h2> Diet Pro</h2>
            <RandomQuote />
            <ul>
                <li><a href="https://facebook.com"><i className="fa fa-facebook-f"></i></a></li>
                <li><a href="https://twitter.com"><i className="fa fa-twitter"></i></a></li>
                <li><a href="https://instagram.com"><i className="fa fa-instagram"></i></a></li>
            </ul>
        </div>
    )
}

export default Header;

