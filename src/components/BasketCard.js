import React from 'react';

const BasketCard = (props) => {
    return(
        <div className='outline w-20 pa3'>
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