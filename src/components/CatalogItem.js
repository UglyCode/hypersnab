import React from 'react';

const CatalogItem = ({description, code, img, set}) => {
    console.log(set);
    return (
        <div className={`flex items-center w-100 f5 items-center justify-between ${(set%2)?'':'bg-lightest-blue'}`}>
            <img className='' src={img}/>
            <p className='w-10 ma0'>{code}</p>
            <p className='w-60 ma0'>{description}</p>
            <div className='flex justify-between items-center w-10'>
                <p className='f3'>+</p>
                <input className='w-70 h-25 ba' type='number'/>
                <p className='f3'>-</p>
            </div>
        </div>
    )
};

export default CatalogItem;