import React from 'react';

const CatalogHeader = (props) => {

    const handleOrderRemove = () =>{
        // eslint-disable-next-line no-restricted-globals
        const result = confirm('Вы действительно хотите очистить корзину?');
        if (result) props.removeOrder();
    };

    return (
        <div className={`flex items-center w-100 f5 items-center justify-between`}>
            <p className='w-10 ma0'>{'Фото'}</p>
            <p className='w-20 ma0 tc'>{'Код'}</p>
            <p className='w-100 ma0'>{'Наименование'}</p>
            <p className='w-20 ma0 tr'>{`Остаток`}</p>
            <p className='w-20 ma0 tr'>{`Цена(руб.)`}</p>
            <p className='w-20 ma0'>{`Заказано`}</p>
            <p className='w-20 ma0'>{`Сумма(руб.)`}</p>
            {props.showCancelButton && <p className='w-10 ma0 red pointer hover-dark-blue underline-hover b'
                                          onClick={handleOrderRemove}>{'X'}</p>}
        </div>
    );
};

export default CatalogHeader;