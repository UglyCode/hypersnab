import React from 'react';
import CatalogStructure from '../../components/CatalogStructure';
import CatalogPage from '../../components/CatalogPage';
import Scroll from '../../components/Scroll';
import {goods, folders} from '../../static/realGoodsMock';

class Catalog extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            folder: '',
            filter: '',
            page: 1,
            goods: [],
            folders: folders,
        }
    }

    componentDidMount() {
        this.setState({goods: goods});
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
        window.scrollTo(0,0);
    };

    //TODO
    // replace with GET /spec request to server with cache and add at componentDidMount()
    getSpecOffers = () => {
        return this.state.goods.filter((elem) => elem.spec);
    };

    getSearchResult = () => {
        return this.state.goods.filter((elem) => {
            return (elem.description.toLowerCase().indexOf(this.props.searchString) >= 0);
        });
    };

    //TODO
    // replace with GET /goods?folder=<folderName> request to server with cache and add at folderSelect
    getFolderFiltererdGoods = (folderName) => {
        return this.state.goods.filter((elem) => (elem.folder === this.state.folder));
    };

    // updateAmountOfOrderedGood = (goodId, newAmount) => {
    //     // newAmount = Number(newAmount);
    //     // let order = this.state.order;
    //     // if (newAmount > 0) {
    //     //     order.set(goodId, newAmount);
    //     // } else {
    //     //     order.delete(goodId);
    //     // }
    //     // this.setState({order});
    //     // console.log(order);
    //     // window.localStorage.setItem('order', this.mapToJson(order));
    // };
    //
    //
    // mapToJson(map) {
    //     return JSON.stringify([...map]);
    // }
    //
    // jsonToMap(jsonStr) {
    //     return new Map(JSON.parse(jsonStr));
    // }

    render() {

        let goods = [];
        if (this.state.folder) {
            goods =  this.getFolderFiltererdGoods();
        } else if (this.props.searchString){
            goods = this.getSearchResult()
        } else {
            goods = this.getSpecOffers();
        };

        return(
            <div className = 'f3 flex w-100'>
                <div className='flex-column w-20 ma2'>
                    <CatalogStructure
                            folders={this.state.folders}
                            toggleChildren = {this.toggleChildrenDisplay}
                            folderSelect = {this.folderSelect}
                            folder={this.state.folder}
                    />
                </div>

                <div className='w-100 ma2'>
                        <CatalogPage
                            goods={goods}
                            order={this.props.order}
                            updateAmount={this.props.updateAmount}
                            setSelectedItem={this.props.setSelectedItem}/>
                </div>
            </div>
        )
    }
}

export default Catalog;