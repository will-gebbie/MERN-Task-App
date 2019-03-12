/*
  Container Description: Main app component (root). Organizes all other components in one file.
*/
import React, { Component } from 'react';
import Header from './components/Header'
import './App.css';
import Tasklist from './components/Tasklist';

class App extends Component {
  
  render() {
    return(
      <div>
        <Header />
        <Tasklist />
      </div>
    );
  }
}

export default App;
