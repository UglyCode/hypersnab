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
    userStatus: 'loggedOut',
    userDataCache: {}
};

class App extends Component {

    constructor(props){
        super(props);
        this.state = initialState;
    }

    toggleProfile = (inn) =>{
        this.setState(prevState => ({
                ...prevState,
                isProfileOpen: !prevState.isProfileOpen,
                userInn: inn || this.state.userInn
            })
        )
        console.log(inn, this.state.userInn, inn || this.state.userInn)
    };

    componentDidMount() {
        const token = window.localStorage.getItem('token');
        this.setInnFromToken(token);
    }

    setInnFromToken = (token) => {
        if (token){
            const payload = this.parseJwtPayload(token);
            if (payload) this.setState({userInn: payload.inn, userStatus: 'loggedIn'});
            console.log(payload, payload.inn);
        }
    };

    parseJwtPayload = (token) => {
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

    setUserStatus = (status, inn) => {
        this.setState({userStatus: status, userInn: inn || this.state.userInn});
    };

    render() {
        return (
            <div className="App vh-100 pa2 flex flex-column">
                <Header
                    toggleProfile={this.toggleProfile}
                    setUserStatus={this.setUserStatus}
                    inn={this.state.userInn}
                    userStatus = {this.state.userStatus}
                />
                <Main rote={this.state.route}/>
                <Footer/>
                {this.state.isProfileOpen &&
                    <Modal>
                        <Profile
                            toggleProfile={this.toggleProfile}
                            inn = {this.state.userInn}
                            logedIn = {this.state.userStatus === 'loggedIn'}
                        />
                    </Modal>
                }
            </div>
        );
  }
}

export default App;


//TODO
//  refactor -> remove inn and replace it to user object (for toggle menu and so on)