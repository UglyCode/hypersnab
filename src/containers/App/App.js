import React, { Component } from 'react';
import './App.css';
import Bill from "../Bills/Bill";
import Modal from '../Modal/Modal';
import Profile from '../Profile/Profile';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Footer from '../../components/Footer';
import ProductCard from '../ProductCard/ProductCard';
import {goodsMock} from '../../static/realGoodsMock';
import ENV from '../../settings/env';

const SERVER = ENV.server || 'http://localhost:3001';

const initialState = {
    route: 'about',
    isProfileOpen: false,
    userInn: '',
    userStatus: 'loggedOut',
    userData: '',
    order: new Map(),
    orderSum: 0,
    orderAutoUpdated: false,
    selectedItem: undefined,
    shownSpecOffers: [],
    searchString: '',
    goods:[],
    folders:[]
};

class App extends Component {

    constructor(props){
        super(props);
        this.state = initialState;

        if (localStorage.billData) {
            this.state.invoiceShown = true;
            this.state.billData = JSON.parse(localStorage.billData);
            localStorage.removeItem("billData");
        }
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
        this.getGoods();

        // const route = window.sessionStorage.getItem('route');
        // if (route) this.setState({'route': route});
    }

    chooseShownSpecOffers(goods, columnLength){

       let spec = goods.reduce((accum, elem, index) =>{
                if (elem.spec) {
                    accum.push(elem);
                    return accum;
                }
                else return accum;
            }, []);

        const seed = Math.floor(Math.random()*spec.length);

        let shownSpecOffers = [];
        for (let i=0; Math.min(i<2*columnLength, spec.length); i++){
            shownSpecOffers.push(spec[(seed+i)%spec.length])
        }
        this.setState({shownSpecOffers});
    }

    updateOrder = (goods, order) => {
        let orderUpdated = false;
        let newOrder = new Map;
        const orderSum = this.state.goods.reduce((accumulator, currentValue) =>{
            let ordered = order.get(currentValue.code);
            if (ordered){
                let amountReduce = ordered > currentValue.quantity;
                orderUpdated = orderUpdated || amountReduce;
                newOrder.set(currentValue.code, Math.min(ordered, currentValue.quantity));
                if (amountReduce) window.sessionStorage.setItem(currentValue.code, 'Превышение доступного остатка');
            }
            let orderedAmount = ordered || 0;
            return accumulator + orderedAmount * currentValue.price;
        },0);
        if (order.size !== newOrder.size) orderUpdated = true;
        window.localStorage.setItem('order', this.mapToJson(newOrder));
        this.setState({order:newOrder, orderSum:orderSum.toFixed(2),
            orderAutoUpdated: this.state.orderAutoUpdated || orderUpdated});
    };

    updateSearchString = (searchString) => {
        this.setState({searchString: searchString.toLowerCase(), route: "catalog"});
    };

    getGoods  = () => {
        fetch(`${ENV.server}/goods`,{
            method : 'GET',
            headers : {
                'Authorization': window.localStorage.getItem('token')
            }})
            .then(res=>res.json())
            .then(goodsRes=> {
                this.setState({goods:goodsRes});
                return goodsRes;
            })
            .then(goods=>{
                const order = this.jsonToMap(window.localStorage.getItem('order')) || this.state.order;
                this.updateOrder(goods,order);
                this.chooseShownSpecOffers(goods,2);
                const route = window.sessionStorage.getItem('route');
                if (route) this.setState({'route': route});
            })
            .catch(e=>console.log(e));
    };

    setInnFromToken = (token) => {
        if (token){
            const payload = this.parseJwtPayload(token);
            if (payload) this.setState({userInn: payload.inn, userStatus: 'loggedIn'});
            if (this.state.invoiceShown){
                this.getUserDataByInn(payload.inn);
            }
        }
    };

    parseJwtPayload = (token) => {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        return JSON.parse(window.atob(base64));
    };

    getUserDataByInn = (inn) => {
        fetch(`${ENV.server}/profile/${inn}`,{
            method : 'GET',
            headers : {
                'Authorization': window.localStorage.getItem('token')
            }
        })
            .then(responseData=> responseData.json())
            .then(uData => {
                this.setState({userData:`${uData.name}, ИНН ${uData.inn}, КПП ${uData.kpp}, ${uData.address}`})
            })
            .catch(e=>console.log(e))
    };

    updateAmountOfOrderedGood = (goodId, newAmount, rate=1) => {
        newAmount = Math.ceil(Number(newAmount)/rate)*rate;
        let order = this.state.order;
        if (newAmount > 0) {
            order.set(goodId, newAmount);
        } else {
            order.delete(goodId);
        }
        this.updateOrder(this.state.goods, order);
        //window.localStorage.setItem('order', this.mapToJson(order));
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
        window.sessionStorage.setItem("route", route);
    };

    basketWarningShown = () => {
        this.setState({orderAutoUpdated: false})
    };

    render() {
        if (this.state.invoiceShown) return (
            <Bill orderedGoods={this.state.billData.orderedGoods}
                  userData={this.state.userData}
                  date={this.state.billData.date}
                  id={this.state.billData.id}
            />
            );
        return (
            <div className="App vh-100 pa2 flex flex-column">
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
                    searchString = {this.state.searchString}
                />
                <Main
                    route={this.state.route}
                    updateAmount = {this.updateAmountOfOrderedGood}
                    order = {this.state.order}
                    orderSum = {this.state.orderSum}
                    orderAutoUpdated = {this.state.orderAutoUpdated}
                    basketWarningShown = {this.basketWarningShown}
                    setSelectedItem = {this.setSelectedItem}
                    shownSpecOffers = {this.state.shownSpecOffers}
                    searchString = {this.state.searchString}
                    inn={this.state.userInn}
                    updateSearchString = {this.updateSearchString}
                    goods = {this.state.goods}
                    folders = {this.state.folders}
                    userStatus = {this.state.userStatus}
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