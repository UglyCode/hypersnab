import React from 'react';
import CatalogPage from '../../components/CatalogPage';
import goods from '../../static/goodsMock';

class Basket extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            orderedGoods: []
        };
    }

    componentDidMount() {
        this.updateOrderedGoods();
    }

    updateOrderedGoods = () => {
        const goodsToUpDate = this.getDifferentKeys(this.props.order, this.state.orderedGoods);
        this.setState({orderedGoods: goods.filter(elem => this.props.order.has(elem.code))})
    };

    getDifferentKeys = (mapOne, mapTwo) => {
       return [...mapOne.keys()].reduce((accum, currKey) => {
           console.log(accum);
           if (mapTwo.indexOf(currKey)<0) {
               accum.push(currKey);
           }
           return accum;
       }, []);
    };

    render() {

        return (
            <div className='flex-column'>
                <CatalogPage goods={this.state.orderedGoods}
                                 order={this.props.order}
                                 updateAmount={this.props.updateAmount}
                />

                <div>
                    <button>ОФОРМИТЬ ЗАКАЗ</button>
                </div>
            </div>

        )
    }
}

export default Basket;