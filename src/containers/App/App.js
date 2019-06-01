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
    userDataCache: {},
    order: new Map()
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
        );
        console.log(inn, this.state.userInn, inn || this.state.userInn)
    };

    componentDidMount() {
        const token = window.localStorage.getItem('token');
        this.setInnFromToken(token);
        const order = this.jsonToMap(window.localStorage.getItem('order')) || this.state.order;
        this.setState({order});
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


    updateAmountOfOrderedGood = (goodId, newAmount) => {
        newAmount = Number(newAmount);
        let order = this.state.order;
        if (newAmount > 0) {
            order.set(goodId, newAmount);
        } else {
            order.delete(goodId);
        }
        this.setState({order});
        console.log(order);
        window.localStorage.setItem('order', this.mapToJson(order));
    };


    mapToJson(map) {
        return JSON.stringify([...map]);
    }

    jsonToMap(jsonStr) {
        return new Map(JSON.parse(jsonStr));
    }

    setUserStatus = (status, inn) => {
        console.log(status, inn);
        this.setState({userStatus: status, userInn: inn || this.state.userInn});
    };

    onRouteChange = (route) => {
        this.setState({route});
    };

    render() {
        return (
            <div className="App vh-100 pa2 flex flex-column">
                <Header
                    toggleProfile={this.toggleProfile}
                    setUserStatus={this.setUserStatus}
                    inn={this.state.userInn}
                    userStatus = {this.state.userStatus}
                    route={this.state.route}
                    onRouteChange = {this.onRouteChange}
                />
                <Main
                    route={this.state.route}
                    updateAmount = {this.updateAmountOfOrderedGood}
                    order = {this.state.order}
                />
                <Footer/>
                {this.state.isProfileOpen &&
                    <Modal>
                        <Profile
                            toggleProfile={this.toggleProfile}
                            setUserStatus = {this.setUserStatus}
                            inn = {this.state.userInn}
                            loggedIn = {this.state.userStatus === 'loggedIn'}
                            order = {this.props.order}
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