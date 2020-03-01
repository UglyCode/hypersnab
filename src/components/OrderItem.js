import React from 'react';

const OrderItem = ({id, key, sum, date, description, orderedGoods, selectOrder, orderSelected}) => {

        return (
            <div key={key} className='flex-column items-center ba ma2 bg-lightest-blue hover-dark-blue'>
                <div id={id} className='flex items-center w-100 f5 underline-hover justify-between ma1 pointer'
                     onClick={selectOrder}>
                    <p className='w-10 ma0 '>{id}</p>
                    <p className='w-20 ma0 pa2 tr'>{date}</p>
                    <p className='w-100 ma0 pa2 tl'>{description.replace('%товаров%', orderedGoods.length)}</p>
                    <p className='w-20 ma0 pa2 tr'>{`${Number(sum).toFixed(2)}`}</p>
                </div>
                <div key={id+'_goods'} className={'bg-white ma2' + (orderSelected ? '' : 'dn')}>
                    { orderSelected && (
                            orderedGoods.map(elem => {
                               return(
                                   <div className='flex w-100 f6 tl justify-between pl5'>
                                       <p className='w-10 ma0 pa2 tl'>{`${elem.good}`}</p>
                                       <p className='w-50 ma0 pa2 tl'>{`${elem.description}`}</p>
                                       <p className='w-10 ma0 pa2 tl'>{`${elem.amount}`}</p>
                                       <p className='w-10 ma0 pa2 tl'>{`${elem.price}`}</p>
                                       <p className='w-10 ma0 pa2 tl'>{`${elem.sum}`}</p>
                                    </div>
                               )
                            })
                    )}
                </div>
            </div>
        );
};

export default OrderItem;