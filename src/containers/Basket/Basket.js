import React from 'react';
import CatalogPage from '../../components/CatalogPage';
//import {goods} from '../../static/realGoodsMock';

class Basket extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            orderedGoods: [],
            showWarning: false
        };
    }

    componentDidMount() {
        this.updateOrderedGoods();
        this.setState({showWarning: this.props.orderAutoUpdated});
        this.props.basketWarningShown();
    }

    updateOrderedGoods = () => {
        //const goodsToUpDate = this.getDifferentKeys(this.props.order, this.state.orderedGoods);
        this.setState({orderedGoods: this.props.goods.filter(elem => this.props.order.has(elem.code))})
    };

    getDifferentKeys = (mapOne, mapTwo) => {
       return [...mapOne.keys()].reduce((accum, currKey) => {
           console.log(accum);
           if (mapTwo.indexOf(currKey)<0) {
               accum.push(currKey);
           return accum;
       }
       }, []);
    };

    confirmOrder = (event) => {
        if (this.props.userStatus !== 'loggedIn') return ;
    };

    render() {

        return (
            <div className='flex-column'>
                {this.state.showWarning &&
                <div className='br1 ba bw1 ph3'>
                    ЗАКАЗ БЫЛ АВТОМАТИЧЕСКИ ОТРЕДАКТИРОВАН! ПРОВЕРЬТЕ СОСТАВ!
                </div>}
                <CatalogPage goods={this.state.orderedGoods}
                             order={this.props.order}
                             updateAmount={this.props.updateAmount}
                             setSelectedItem={this.props.setSelectedItem}
                />
                <div className='flex flex-row-reverse ma0'>
                    <p className='f4'>{`ИТОГО: ${this.props.orderSum} руб.`}</p>
                </div>
                <div className="ph3 mt4 b" id={'confirmOrder'}>
                    <a className="f6 link br1 ba bw1 ph3 pv2 mb2 dib black hover-blue underline-hover" href="#0">
                        ОФОРМИТЬ ЗАКАЗ
                    </a>
                    {this.props.userStatus === 'loggedIn' ||
                        <p className='red tc ba b--dark-red f7'>
                            *Для оформления заказа необходимо войти или зарегистрироваться!
                        </p>}
                </div>
            </div>

        )
    }
}

export default Basket;