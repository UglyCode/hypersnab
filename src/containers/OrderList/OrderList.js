import React from 'react';
import OrderItem from '../../components/OrderItem';

class OrderList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            activeOrders: new Set(),
            orders: []
        };
    }

    componentDidMount() {
        this.updateOrderList();
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     this.updateOrderList();
    // }

    updateOrderList = () => {
        const orders = [
            {id:1, sum: 111, date:"2020-01-21", description: "Заказано 5 наименований общим количесвтом 11 шт.", status: "исполнен",
                orderedGoods: [{good: 123213, description: "Товар", amount: 1, price: 25}]},
            {id:2, sum: 111, date:"2020-01-21", description: "Заказано 11 наименований общим количесвтом 5 шт.", status: "исполнен",
                orderedGoods: [{good: 123213, description: "Товар", amount: 1, price: 25}]}
            ];
        this.setState({orders:orders, activeOrders: new Set()});
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

    render() {
        const selectedOrder = this.selectOrder;
        const activeOrders = this.state.activeOrders;
        return (
            <div className='flex-column'>
                {
                    this.state.orders.map((elem => {
                        return(
                            <OrderItem
                                id={elem.id}
                                key={elem.id}
                                sum={elem.sum}
                                date={elem.date}
                                description={elem.description}
                                orderedGoods={elem.orderedGoods}
                                selectOrder={selectedOrder}
                                orderSelected={activeOrders.has(elem.id)}
                            />);
                    }))
                }
            </div>

        )
    }
}

export default OrderList;