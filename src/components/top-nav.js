import React from 'react';

import './top-nav.css';

export default function TopNav(props) {
    return (
        <div className="top-nav">
        <a href="#what" className="what">WHAT?</a>
        <a href="#newgame" className="newGame">+ NEW GAME</a>
        </div>
    );
}