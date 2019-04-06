import React from 'react';

const BasketCard = (props) => {
    return(
        <div className='outline w-25'>
            <div className = 'f4'>
                {'Basket'}
            </div>
            <div className = 'f6'>
                {'Total sum: 3600'}
            </div>

        </div>
    )
};

export default BasketCard;