import React from 'react';

const CatalogItem = ({description, code, img, set, quantity, price}) => {
    return (
        <div className={`flex items-center w-100 f5 items-center justify-between ${(set%2)?'':'bg-lightest-blue'}`}>
            <img className='' src={img}/>
            <p className='w-10 ma0'>{code}</p>
            <p className='w-60 ma0'>{description}</p>
            <p className='w-10 ma0'>{`${quantity} шт.`}</p>
            <p className='w-10 ma0'>{`${price} руб.`}</p>
            <div className='flex justify-between items-center w-10'>
                <div className='w-20 pointer'>
                    <img src={require('../static/plus.png')} className='mw-100'></img>
                </div>
                <input className='h-25 ba w-60' type='number'/>
                <div className='w-20 pointer'>
                    <img src={require('../static/minus.png')} className='mw-100'></img>
                </div>
            </div>
        </div>
    )
};

export default CatalogItem;