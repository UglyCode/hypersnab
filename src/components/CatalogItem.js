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
                <p className='f3 w-30'>+</p>
                <input className='h-25 ba w-40' type='number'/>
                <p className='f3 w-30'>-</p>
            </div>
        </div>
    )
};

export default CatalogItem;