import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          A unique Hypixel stats bot that allows users to view their<br/>daily and weekly Bedwars, SkyWars and Duels statistics.
        </p>
        <a
          className="App-link"
          href="https://observerbot.xyz/invite"
          target="_blank"
          rel="noopener noreferrer"
        >
          Invite
        </a>
      </header>
    </div>
  );
}

export default App;
