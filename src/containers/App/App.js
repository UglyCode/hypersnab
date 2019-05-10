import React, { Component } from 'react';
import './App.css';

import Modal from '../Modal/Modal';
import Profile from '../Profile/Profile';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Footer from '../../components/Footer';

import ENV from '../../settings/env';

const SERVER = ENV.server || 'http://localhost:3001';

const initialState = {
    route: 'about',
    isProfileOpen: false,
    userInn: '',
    userStatus: 'loggedOut'
};

class App extends Component {

    constructor(props){
        super(props);
        this.state = initialState;
    }

    toggleProfile = (userInfo) =>{
        this.setState(prevState => ({
                ...prevState,
                isProfileOpen: !prevState.isProfileOpen,
                userInfo: userInfo
            })
        )
    };

    componentDidMount() {
        const token = window.sessionStorage.getItem('token');
        this.setInnFromToken(token);
        this.signInByToken(token);
    }

    setInnFromToken = (token) => {
        if (token){
            const payload = this.parseJwt(token);
            if (payload.inn) this.setState({userInn: payload.inn});
        }
    };

    parseJwt = (token) => {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        return JSON.parse(window.atob(base64));
    };

    signInByToken = (token) => {
        if (token){
           return( fetch(`${SERVER}/signIn`, {
                method: 'POST',
                headers : {
                    'Content-type': 'application/json',
                    'Authorization': token
                }
            })
                .then(res=>res.json())
                .then(data => {
                    if (data && data.id) {
                        this.setState({isSignedIn: true});
                    } else {
                        this.setState({isSignedIn: false});
                    }
                }) );
        }
    };

    render() {
        return (
            <div className="App vh-100 pa2 flex flex-column">
                <Header
                    toggleProfile={this.toggleProfile}
                    inn={this.state.userInn}
                    userStatus = {this.state.userStatus}
                />
                <Main rote={this.state.route}/>
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


//TODO
//  refactor -> remove inn and replace it to user object (for toggle menu and so on)