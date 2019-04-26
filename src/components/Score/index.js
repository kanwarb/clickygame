import React from "react";
import "./style.css";


const Score = props => (
  <div className="gameScore">
    <h3 className="score">Your Score --> {props.total} : Top Score : {props.topscore}</h3>
    <h3 className="status">{props.status}</h3>
  </div>
);

export default Score;