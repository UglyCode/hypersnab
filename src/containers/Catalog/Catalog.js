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
            folders:[{name: 'Категория 1', children:[{name:'Папка 1', children:[]},{name:'Папка 2', children:[]}]},
                {name: 'Категория 2', children:[{name:'Папка 3', children:[]}]}]
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
    };

    render() {
        return(
            <div className = 'f3 flex items-stretch w-100'>
                <CatalogStructure
                    folders={this.state.folders}
                    toggleChildren = {this.toggleChildrenDisplay}
                    folderSelect = {this.folderSelect}
                    folder={this.state.folder}
                />
                <CatalogPage goods={this.state.goods}/>
            </div>
        )
    }
}

export default Catalog;