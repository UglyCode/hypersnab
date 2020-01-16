import React from 'react';
import CatalogStructure from '../../components/CatalogStructure';
import CatalogPage from '../../components/CatalogPage';
import AttributeFilters from '../../components/AttributeFilters';
import ENV from "../../settings/env";

const SERVER = ENV.server || 'http://localhost:3001';

class Catalog extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            folder: '',
            selectedAttributes:[], // [{attribute: int, values:[string,...]},{}]
            page: 1,
            goods: props.goods,
            searchString: props.searchString,
            filteredGoods: [],
            folders: [],
            goodsUpdateNeeded: true
        }
    }

    componentDidMount() {
        this.getFolders();
        this.state.goods.sort((a,b) => {
            if (a.sort > b.sort) {
                return 1;
            } else {
                return -1;
            }
        });
        this.updateFilteredGoods();
    }

    getFolders = () =>{
        fetch(SERVER + '\\folders')
            .then(res=>res.json())
            .then(foldersRes=> {
                this.setState({folders:foldersRes});
                return foldersRes;
            })
            .catch(e=>console.log(e));
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        //update product list with new filter implemented
        //add cache to this kind of request

        if (this.state.goodsUpdateNeeded){
            this.updateFilteredGoods();
        };
        console.log('state: ', prevState, this.state);
    }

    updateFilteredGoods(){
        let filteredGoodsPromise;
        if (this.state.folder) {
            filteredGoodsPromise =  //Promise.resolve(this.getFolderFiltererdGoods(this.state.folder));
                fetch(`${SERVER}/goods/${this.state.folder}` +
                `?attributes_filter=${JSON.stringify(this.state.selectedAttributes)}`)
                    .then(goodsRes=>goodsRes.json());
        } else if (this.props.searchString){
            filteredGoodsPromise = Promise.resolve(this.getSearchResult());
        } else {
            filteredGoodsPromise = Promise.resolve(this.getSpecOffers());
        };

        filteredGoodsPromise.then(filteredGoods => {
            this.setState({goodsUpdateNeeded:false, filteredGoods: filteredGoods});
        })
            .catch(console.log('cant update goods'));
    };

    toggleChildrenDisplay = (event) =>{
        const children = event.target.parentElement.children; //siblings
        for(let i=1; i < children.length; i++){
            children[i].classList.toggle('dn');
        }
    };

    folderSelect = (event) => {
        const selectedFolder = event.target.id;
        this.setState({folder: (this.state.folder !== selectedFolder) ? selectedFolder : '',
            goodsUpdateNeeded: true});
        event.stopPropagation();
        window.scrollTo(0,0);
    };

    setSelectedAttributes = (attributesArray) => {
        this.setState({selectedAttributes:attributesArray})
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

         let goods = this.state.filteredGoods;
        // if (this.state.folder) {
        //     goods =  this.getFolderFiltererdGoods();
        // } else if (this.props.searchString){
        //     goods = this.getSearchResult()
        // } else {
        //     goods = this.getSpecOffers();
        // };

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
                    {(this.state.folder) &&
                        <AttributeFilters
                        folder={this.state.folder}
                        selectedAttributes={this.state.selectedAttributes}
                        setSelectedAttributes={this.setSelectedAttributes}/>}
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