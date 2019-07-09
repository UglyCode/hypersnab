import React from 'react';
import CatalogPage from '../../components/CatalogPage';

class Basket extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            orderedGoods: []
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.orderedGoods.keys().equals(this.props.order.keys())) {
            return;    
        }
        this.updateOrderedGoods();
    }

    updateOrderedGoods = () => {
        const goodsToUpDate = this.getDifferentKeys(this.props.order, this.state.orderedGoods);

    };

    getDifferentKeys = (mapOne, mapTwo) => {
       return mapOne.keys().reduce((accum, currKey) => {
           if (mapTwo.has(currKey)) {
               return accum;
           } else {
               return accum.add(currKey);
           }
       }, []);
    };

    render() {

        return (<CatalogPage goods={this.state.orderedGoods}
                             order={this.props.order}
                             updateAmount={this.props.updateAmount}/>)
    }
}

export default Basket;