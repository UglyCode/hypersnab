import React from 'react';
import CatalogStructure from '../../components/CatalogStructure';
import CatalogPage from '../../components/CatalogPage';
import Scroll from '../../components/Scroll';
import goods from '../../goodsMock';

class Catalog extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            folder: '',
            filter: '',
            page: 1,
            goods: [],
            folders: []
        }
    }


    componentDidMount() {
        this.setState({goods: goods});
    }

    render() {
        return(
            <div className = 'f3 flex items-stretch w-100'>
                <CatalogStructure folders={this.state.folders}/>
                <CatalogPage goods={this.state.goods}/>
            </div>
        )
    }
}

export default Catalog;