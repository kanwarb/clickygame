import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from './components/Wrapper';
import Card from "./components/Card";
import friends from "./clickcard.json"
import Container from "./components/Container";

function App() {

  return (
    <div className="App">
        <h1 className="text-center">You can click any Character only once</h1>
          {friends.map(friend => (
            <Card
              id={friend.id}
              key={friend.id}
              image={friend.image}
            />

          ))}
        </div>
  );
}


export default App;
