import React from 'react';
import CatalogItem from './CatalogItem';
import CatalogHeader from './CatalogHeader';

const CatalogPage = ({goods, order, updateAmount}) => {
    return(
        <div className="flex-column w-100 br3 bg-white pa3 ma0">
            <CatalogHeader/>
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
                        measure={elem.measure}
                        amount={order.get(elem.code)||0}
                        updateAmount={updateAmount}
                    />
                );
            })}
        </div>
    )
};

export default CatalogPage;