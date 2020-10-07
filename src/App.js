import React from 'react';
import logo from './logo.svg';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Amplify App</h1>
        <AmplifySignOut />
      </header>
    </div>
  );
}

export default withAuthenticator(App);
