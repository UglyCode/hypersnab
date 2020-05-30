import React from 'react';
import ENV from "../settings/env";

const OrderItem = ({id, key, sum, date, description, orderedGoods, selectOrder,
                       orderSelected, status, showBill, updateOrderList}) => {

    const showBillForOrder = () => {
        showBill(date, id, orderedGoods);
    };

    const cancelOrder = () =>{
        // eslint-disable-next-line no-restricted-globals
      let answer = confirm("Вы уверены, что хотите отменить зака?");
      if (answer){
              fetch(`${ENV.server}/orders/${id}`, {
                  method: 'POST',
                  headers : {
                      'Content-type': 'application/json',
                      'Authorization': window.localStorage.getItem('token')
                  },
                  body: '{"status":"Отменяется"}'
              }).then(resp => {
                  if (resp.status === 200 || resp.status === 304){
                      window.localStorage.removeItem('order');
                      window.location.reload();
                      alert('Отправлена заявка на отмену заказа.');
                      this.props.updateOrderList();
                  } else {
                      alert('Не удалось отменить заказ. Попробуйте позднее!');
                  }
              }).catch( err => console.log);
      };
    };

        return (
            <div className='flex justify-between bg-lightest-blue ba mb2 w-100'>
                <div key={key} className='flex-column items-center pr2 hover-dark-blue w-100'>
                    <div id={id} className='flex items-start w-100 f5 underline-hover justify-between ma2 pointer'
                         onClick={selectOrder}>
                        <p className='w-10 ma0 pa2 tl'>{id}</p>
                        <p className='w-20 ma0 pa2 tl'>{date}</p>
                        <p className='w-20 ma0 pa2 tl'>{status}</p>
                        <p className='w-40 ma0 pa2 tl'>{description.replace('%товаров%', orderedGoods.length)}</p>
                        <p className='w-20 ma0 pa2 tl'>{`${Number(sum).toFixed(2)}`}</p>
                    </div>
                    <div key={id+'_goods'} className={'bg-white ma2' + (orderSelected ? '' : 'dn')}>
                        { orderSelected && (
                                orderedGoods.map(elem => {
                                   return(
                                       <div className='flex w-100 f6 tl items-center justify-between pl5'>
                                           <p className='w-10 ma0 pa2 tl'>{`${elem.good}`}</p>
                                           <p className='w-40 ma0 pa2 tl'>{`${elem.description}`}</p>
                                           <p className='w-10 ma0 pa2 tl'>{`${elem.amount}`}</p>
                                           <p className='w-10 ma0 pa2 tl'>{`${elem.price}`}</p>
                                           <p className='w-10 ma0 pa2 tl'>{`${elem.sum}`}</p>
                                        </div>
                                   )
                                })
                        )}
                    </div>
                </div>
                <div className='mb bl w-20 flex-column'>
                    {/*<img src={require('../static/cart.png')} alt='Открыть счет'*/}
                    {/*     className='mw-100 pointer link dim pt1'*/}
                    {/*     style={{width: "40px", height: "40px"}}*/}
                    {/*     onClick={showBillForOrder}/>*/}
                    <p onClick={showBillForOrder} className='f5 pointer hover-dark-blue underline-hover'>
                        Скачать счет
                    </p>
                    <p onClick={cancelOrder} className='f5 pointer hover-dark-blue underline-hover'>
                        Отменить заказ
                    </p>

                </div>
            </div>

        );
};

export default OrderItem;