import React from "react";
import "./Header.css";

// create a header with a Bootstrap navbar and jumbotron
const Header = props => (
  
  <div className="main-container">
    <nav className="navbar sticky-top navbar-light justify-content-end">
      <h5 className="text-muted">current score: {props.currentScore} | top score: {props.topScore}</h5>
    </nav>
    
    <div className="jumbotron text-muted">
      <div className="border border-light">
      <h1><strong>Memory Card Game</strong></h1>
      <p className="lead">Click a card, but only click it once!</p>
      </div>
    </div>
  </div>
);

export default Header;