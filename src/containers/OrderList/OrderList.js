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
            .then(ordersRes => this.parseOrdersResposne(ordersRes))
            .then(orders => this.setState({orders: orders}))
            .catch(e=>console.log(e));

     };

    parseOrdersResposne = (response) => {

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
                sum: elem.sum,
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
                {this.state.orders.length || (<h1 className='tc w-100 f5'> НЕ УДАЛОСЬ НАЙТИ СТАРЫЕ ЗАКАЗЫ </h1>)}
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
                                />
                            </div>);
                    }))
                }
            </div>

        )
    }
}

export default OrderList;