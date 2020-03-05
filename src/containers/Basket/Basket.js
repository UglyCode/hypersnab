import React from 'react';
import CatalogPage from '../../components/CatalogPage';
import ENV from "../../settings/env";
//import {goods} from '../../static/realGoodsMock';

class Basket extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            orderedGoods: [],
            showWarning: false,
            DeliveryAddressDisabled: true
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
            delivery: document.getElementById('delivery').checked,
            delivery_address: document.getElementById('deliveryAddress').value,
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

    deliveryOnChange = ()=>{
        this.setState({DeliveryAddressDisabled: !document.getElementById('delivery').checked})
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
                <div className='w-100 flex-column justify-start pa3 f5 bg-lightest-blue'>
                    <div className="flex items-center mb2 w-100">
                        <div className='flex w-20 items-start'>
                            <label htmlFor="delivery" className="lh-copy ma2 pointer">Доставить заказ</label>
                            <input type='checkbox' name='delivery' id='delivery' className='mt3 pointer'
                                   onChange={this.deliveryOnChange}/>
                        </div>
                        <textarea className='ma2 w-80' name="deliveryAddress" id='deliveryAddress'
                                  placeholder='Введите адрес доставки' disabled={this.state.DeliveryAddressDisabled}/>
                    </div>
                    <div className="flex items-center mb2 w-100">
                        <div className="flex items-start mb2 w-20">
                            <label htmlFor="comment" className="lh-copy ma2"> Комментарий: </label>
                        </div>
                        <textarea className='ma2 w-80' name="comment" id='comment' placeholder='Комментарий к заказу'/>
                    </div>
                </div>
                <div className="ph3 mt4 b" onClick={this.confirmOrder}>
                    <a className="f6 link br1 ba bw1 ph3 pv2 mb2 dib black hover-blue underline-hover">
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