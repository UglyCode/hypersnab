import React from 'react';

const BasketCard = (props) => {
    return(
        <div className='w-20 items-center tc pl3 f5 br3 bg-lightest-blue'>
            <div className='flex-column ma2'>
                <div>{'CART: '}</div>
                <div className = ''>
                    {'(11)3600RUR'}
                </div>
            </div>

        </div>
    )
};

export default BasketCard;