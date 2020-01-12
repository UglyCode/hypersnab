import React from 'react';

const CatalogHeader = (props) => {
    return (
        <div className={`flex items-center w-100 f5 items-center justify-between`}>
            <p className='w-10 ma0'>{'Фото'}</p>
            <p className='w-20 ma0 tr'>{'Код'}</p>
            <p className='w-100 ma0'>{'Наименование'}</p>
            <p className='w-20 ma0 tr'>{`Остаток`}</p>
            <p className='w-20 ma0 tr'>{`Цена(руб.)`}</p>
            <p className='w-20 ma0'>{`Заказано`}</p>
            <p className='w-20 ma0'>{`Сумма(руб.)`}</p>
        </div>
    );
};

export default CatalogHeader;