import React from 'react';
import CatalogStructure from '../../components/CatalogStructure';
import CatalogPage from '../../components/CatalogPage';
import Scroll from '../../components/Scroll';
import goods from '../../static/goodsMock';

class Catalog extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            folder: '',
            filter: '',
            page: 1,
            goods: [],
            folders:[{name: 'Категория 1', children:[{name:'Папка 1', children:[]},{name:'Папка 2', children:[]}]},
                {name: 'Категория 2', children:[{name:'Папка 3', children:[]}]}],
            order: new Map()
        }
    }

    componentDidMount() {
        const order = this.jsonToMap(window.localStorage.getItem('order')) || this.state.order;
        this.setState({goods: goods, order: order});
        console.log(order);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //update product list with new filter implemented
        //add cache to this kind of request
        console.log('state: ', prevState, this.state);
    }

    toggleChildrenDisplay = (event) =>{
        const children = event.target.parentElement.children; //siblings
        for(let i=1; i < children.length; i++){
            children[i].classList.toggle('dn');
        }
    };

    folderSelect = (event) => {
        const selectedFolder = event.target.innerText;
        this.setState({folder: (this.state.folder !== selectedFolder) ? selectedFolder : ''});
        event.stopPropagation();
    };

    //TODO
    // replace with GET /spec request to server with cache and add at componentDidMount()
    getSpecOffers = () => {
        return this.state.goods.filter((elem) => elem.spec);
    };

    //TODO
    // replace with GET /goods?folder=<folderName> request to server with cache and add at folderSelect
    getFolderFiltererdGoods = (folderName) => {
        return this.state.goods.filter((elem) => (elem.folder === this.state.folder));
    };

    updateAmountOfOrderedGood = (goodId, newAmount) => {
        newAmount = Number(newAmount);
        console.log(goodId, newAmount);
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

    render() {

        let goods = (this.state.folder) ? this.getFolderFiltererdGoods() : this.getSpecOffers();

        console.log('catalog render');
        return(
            <div className = 'f3 flex items-stretch w-100'>
                <CatalogStructure
                    folders={this.state.folders}
                    toggleChildren = {this.toggleChildrenDisplay}
                    folderSelect = {this.folderSelect}
                    folder={this.state.folder}
                />
                <CatalogPage
                    goods={goods}
                    order={this.state.order}
                    amountUpdate={this.updateAmountOfOrderedGood}/>
            </div>
        )
    }
}

export default Catalog;