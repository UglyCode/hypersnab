import React, { Component } from 'react';
import './App.css';

import Modal from '../Modal/Modal';
import Profile from '../Profile/Profile';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Footer from '../../components/Footer';


class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            isProfileOpen: false
        }
    }


    toggleProfile = () =>{
        this.setState(prevState => ({
            ...prevState,
            isProfileOpen: !prevState.isProfileOpen
        }))
    };

  render() {
    return (
      <div className="App vh-100 pa2 flex flex-column">
        <Header toggleProfile={this.toggleProfile}/>
        <Main />
        <Footer/>
          {this.state.isProfileOpen &&
            <Modal>
                <Profile toggleProfile={this.toggleProfile}/>
            </Modal>
          }
      </div>
    );
  }
}

export default App;
