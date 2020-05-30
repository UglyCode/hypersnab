import React from 'react';
import OrderItem from '../../components/OrderItem';
import ENV from "../../settings/env";
import Bill from "../Bills/Bill";

const SERVER = ENV.server || 'http://localhost:3001';

class OrderList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            activeOrders: new Set(),
            orders: [],
            isBillShown: false,
            billData: [],
            userData: ''
        };
    }

    componentDidMount() {
        this.updateOrderList();
    }

    updateOrderList = () => {

        fetch(SERVER + `\\orders?client=${this.props.inn}`)
            .then(res => res.json())
            .then(ordersRes => this.parseOrdersResponse(ordersRes))
            .then(orders => this.setState({orders: orders}))
            .catch(e=>console.log(e));

     };

    parseOrdersResponse = (response) => {

        let orderId;

        return response.reduce((accum, elem) => {
            if (orderId !== elem.orderid){
                accum.push({id: elem.orderid, sum: 0, date: new Date(elem.updated).toLocaleDateString(), status: elem.status,
                    description:'Товаров в заказе: %товаров%',
                    orderedGoods: []});
                orderId = elem.orderid;
            }

            const curElement = accum[accum.length-1];
            curElement.orderedGoods.push({
                good:elem.good,
                description: elem.description,
                amount: elem.amount,
                price: elem.price,
                sum: Number(elem.sum).toFixed(2),
                measure: elem.measure
            });

            curElement.sum += Number(elem.sum);
            return accum;
        }, []);

    };

    selectOrder = (event) => {
        const orderId = Number(event.currentTarget.id);
        let activeOrders = new Set(this.state.activeOrders);
        if (this.state.activeOrders.has(orderId)) {
            activeOrders.delete(orderId);
        } else {
            activeOrders.add(orderId);
        }
        this.setState({activeOrders: activeOrders});
    };

    showBill = (date, id , orderData) => {
        const billData = {
            date: date,
            id: id,
            orderedGoods: orderData
        };
        const billDataStr = JSON.stringify(billData);
        localStorage.setItem("billData", billDataStr);
        window.open(window.location.href, "_blank");
    };

    render() {
        const selectedOrder = this.selectOrder;
        const activeOrders = this.state.activeOrders;
        return (
            <div className='flex-column'>
                {<div className='flex justify-around items-center w-100 f4'>
                    <p> {`Всего заказов: ${this.state.orders.length}`} </p>
                    <p className="pointer hover-dark-blue underline-hover" onClick={this.updateOrderList}>Обновить</p>
                </div>}
                {
                    this.state.orders.map((elem => {
                        return(
                            <div className='flex-column justify-between'>
                                <OrderItem
                                    id={elem.id}
                                    key={elem.id}
                                    sum={elem.sum}
                                    date={elem.date}
                                    status={elem.status}
                                    description={elem.description}
                                    orderedGoods={elem.orderedGoods}
                                    selectOrder={selectedOrder}
                                    orderSelected={activeOrders.has(elem.id)}
                                    showBill={this.showBill}
                                    updateOrderList = {this.updateOrderList}
                                />
                            </div>);
                    }))
                }
            </div>

        )
    }
}

export default OrderList;