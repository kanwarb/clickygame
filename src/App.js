import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import game from "./game";

function App() {
  
  return (
    <Router>
    <div className="App">
      <Route exact path="/" component={game} /> 
     </div>
     </Router>
  );
}


export default App;
