import React from 'react';
import CatalogPage from '../../components/CatalogPage';
import ENV from "../../settings/env";
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

    createOrderObject = () => {
        return {
            inn: this.props.inn,
            comment: document.getElementById('comment').value,
            orderedGoods: this.state.orderedGoods.map((elem) => {
                return {good: elem.code, price: elem.price, ammount: this.props.order.get(elem.code)}
            })
        }
    };

    confirmOrder = (event) => {
        if (this.props.userStatus !== 'loggedIn') return ;
        const orderObject = this.createOrderObject();
        fetch(`${ENV.server}/orders`, {
            method: 'POST',
            headers : {
                'Content-type': 'application/json',
                'Authorization': window.localStorage.getItem('token')
            },
            body: JSON.stringify(orderObject)
        }).then(resp => {
            if (resp.status === 200 || resp.status === 304){
                window.localStorage.removeItem('order');
                window.location.reload();
                alert('Заказ успешно размещен и доступен к просмотру в списке заказов.');
            } else {
                alert('Не удалось разместить заказ. Попробуйте позднее!')
            }
        }).catch( err => console.log);
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
                <div className='w-100 flex-column justify-start pa3 f5'>
                    <div className='flex items-center justify-around ma2'>
                        <label>
                            <input type='checkbox' name='delivery' id='delivery' className='mr2'/>
                            Заказать доставку
                        </label>
                        <label>
                            Адрес доставки и комментарий к заказу:
                        </label>
                    </div>
                    <textarea className='w-90' name="comment" id='comment'/>
                </div>
                <div className="ph3 mt4 b" onClick={this.confirmOrder}>
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