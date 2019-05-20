import React from 'react';
import CatalogStructure from '../../components/CatalogStructure';
import CatalogPage from '../../components/CatalogPage';
import Scroll from '../../components/Scroll';


class Catalog extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            folder: '',
            filter: '',
            page: 1
        }
    }


    render() {
        return(
            <div className = 'f3 flex items-stretch w-100'>
                <CatalogStructure/>
                <Scroll>
                    <CatalogPage/>
                </Scroll>
            </div>
        )
    }
}

export default Catalog;