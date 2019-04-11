import React, { Component } from 'react';
import './App.css';

import Modal from '../Modal/Modal';
import Profile from '../Profile/Profile';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Footer from '../../components/Footer';


class App extends Component {
  render() {
    return (
      <div className="App vh-100 pa2 flex flex-column">
        <Header/>
        <Main/>
        <Footer/>
          {false &&
            <Modal>
                <Profile/>
            </Modal>
          }
      </div>
    );
  }
}

export default App;
