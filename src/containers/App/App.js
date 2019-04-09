import React, { Component } from 'react';
import './App.css';

import Header from '../../components/Header';
import Main from '../../components/Main';



class App extends Component {
  render() {
    return (
      <div className="App vh-100 pa2 flex flex-column">
        <Header/>
        <Main/>

      </div>
    );
  }
}

export default App;
