import React, { Component } from 'react';
import './App.css';

import Modal from '../Modal/Modal';
import Profile from '../Profile/Profile';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Footer from '../../components/Footer';


const initialState = {
    route: 'about',
    isSignedIn: false,
    isProfileOpen: false,
    user: {}
};

class App extends Component {

    constructor(props){
        super(props);
        this.state = initialState;
    }

    toggleProfile = () =>{
        this.setState(prevState => ({
            ...prevState,
            isProfileOpen: !prevState.isProfileOpen
        }))
    };

    setUserData = (userObj, cb) => {
        this.setState({user: userObj}, cb)
    };

  render() {
    return (
      <div className="App vh-100 pa2 flex flex-column">
        <Header toggleProfile={this.toggleProfile} setUserData={this.setUserData}/>
        <Main/>
        <Footer/>
        {this.state.isProfileOpen &&
            <Modal>
                <Profile toggleProfile={this.toggleProfile} user={this.state.user}/>
            </Modal>
        }
      </div>
    );
  }
}

export default App;
