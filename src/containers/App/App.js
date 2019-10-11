import React, { Component } from 'react';
import './App.css';

import Modal from '../Modal/Modal';
import Profile from '../Profile/Profile';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Footer from '../../components/Footer';
import ProductCard from '../ProductCard/ProductCard';
import {goods} from '../../static/realGoodsMock';
import ENV from '../../settings/env';

const SERVER = ENV.server || 'http://localhost:3001';

const initialState = {
    route: 'about',
    isProfileOpen: false,
    userInn: '',
    userStatus: 'loggedOut',
    userDataCache: {},
    order: new Map(),
    orderSum: 0,
    selectedItem: undefined,
    shownSpecOffers: [],
    searchString: ''
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

    setSelectedItem = (item) => {
        this.setState({selectedItem: item});
    };

    clearItem = () => {
        this.setSelectedItem(undefined);
    };

    componentDidMount() {
        const token = window.localStorage.getItem('token');
        this.setInnFromToken(token);
        const order = this.jsonToMap(window.localStorage.getItem('order')) || this.state.order;
        this.updateOrder(order);
        this.chooseShownSpecOffers(2);
    }

    chooseShownSpecOffers(columnLength){

       let spec = goods.reduce((accum, elem, index) =>{
                if (elem.spec) {
                    accum.push(elem);
                    return accum;
                }
                else return accum;
            }, []);

        const seed = Math.floor(Math.random()*spec.length);

        let shownSpecOffers = [];
        for (let i=0; i<2*columnLength; i++){
            shownSpecOffers.push(spec[(seed+i)%spec.length])
        }
        this.setState({shownSpecOffers});
        console.log(shownSpecOffers);
    }

    updateSearchString = (searchString) => {
        this.setState({searchString: searchString.toLowerCase(), route: "catalog"});
    }

    getGoods = () => {
        fetch(SERVER + '\\goods')
            .then(res=>res.json())
            .then(goodsRes=> {
                let goodsSrv = goodsRes;
            })
            .catch(e=>console.log(e))
    };
    //TODO
    // replace with fetching data from server GET /orderSum
    updateOrder = (order) => {
        const orderSum = goods.reduce((accumulator, currentValue) =>{
            let orderedAmount = order.get(currentValue.code) || 0;
            return accumulator + orderedAmount * currentValue.price;
        },0);
        this.setState({order:order, orderSum:orderSum.toFixed(2)});
    };

    setInnFromToken = (token) => {
        if (token){
            const payload = this.parseJwtPayload(token);
            if (payload) this.setState({userInn: payload.inn, userStatus: 'loggedIn'});
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
        this.updateOrder(order);
        window.localStorage.setItem('order', this.mapToJson(order));
    };

    mapToJson(map) {
        return JSON.stringify([...map]);
    }

    jsonToMap(jsonStr) {
        return new Map(JSON.parse(jsonStr));
    }

    setUserStatus = (status, inn) => {
        this.setState({userStatus: status, userInn: inn || this.state.userInn});
    };

    onRouteChange = (route) => {
        this.setState({route});
    };

    handleButtonPress = (event) =>{
        console.log('key pressed', event.key);
        if (event.key === 'Esc') {
            console.log(event.target);
            this.handleSearchInput();
        }
    };

    render() {
        return (
            <div className="App vh-100 pa2 flex flex-column" onKeyPress={this.handleButtonPress}>
                <Header
                    toggleProfile={this.toggleProfile}
                    setUserStatus={this.setUserStatus}
                    inn={this.state.userInn}
                    userStatus = {this.state.userStatus}
                    route={this.state.route}
                    onRouteChange = {this.onRouteChange}
                    orderSum = {this.state.orderSum}
                    goodsAmount = {this.state.order.size}
                    updateSearchString = {this.updateSearchString}
                />
                <Main
                    route={this.state.route}
                    updateAmount = {this.updateAmountOfOrderedGood}
                    order = {this.state.order}
                    orderSum = {this.state.orderSum}
                    setSelectedItem = {this.setSelectedItem}
                    shownSpecOffers = {this.state.shownSpecOffers}
                    searchString = {this.state.searchString}
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
                {this.state.selectedItem &&
                    <Modal>
                        <ProductCard
                            item = {this.state.selectedItem}
                            clearItem = {this.clearItem}
                            updateAmount = {this.updateAmountOfOrderedGood}
                            orderedAmount = {this.state.order.get(this.state.selectedItem.code)}
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