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
            folders:[{name: 'Категория 1', children:[{name:'Папка 1', id:'1'},{name:'Папка 2', id:'2'}]},
                {name: 'Категория 2', children:[{name:'Папка 3', id:'3'}]}]
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