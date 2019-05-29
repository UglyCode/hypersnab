import React from 'react';
import CatalogItem from './CatalogItem';

const CatalogPage = ({goods, order, amountUpdate}) => {
    return(
        <div className="flex-column w-100 br3 bg-white pa3 ma2">
            {goods.length && goods.map((elem, i) => {
                return (
                    <CatalogItem
                        key={i}
                        set={i}
                        code={elem.code}
                        description={elem.description}
                        price={elem.price}
                        quantity={elem.quantity}
                        img={elem.img}
                        amount={order.get(elem.code)||0}
                        amountUpdate={amountUpdate}
                    />
                );
            })}
        </div>
    )
};

export default CatalogPage;