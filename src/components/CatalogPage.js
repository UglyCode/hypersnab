import React from 'react';
import CatalogItem from './CatalogItem';
import CatalogHeader from './CatalogHeader';
import ENV from "../settings/env";

const CatalogPage = ({goods, order, setSelectedItem, updateAmount,showCancelButton}) => {
    let set = 0;
    return(
        <div className="flex-column w-100 br3 bg-white pa3 ma0">
            <CatalogHeader showCancelButton={showCancelButton}/>
            {goods.length && goods.map((elem, i) => {
                if (elem.quantity && elem.price){
                    set += 1;
                    return (
                        <CatalogItem
                            key={i}
                            set={set}
                            code={elem.code}
                            description={elem.description}
                            price={elem.price}
                            quantity={elem.quantity}
                            img={`${ENV.imgPath}${elem.code}.jpg`}
                            measure={elem.measure}
                            amount={order.get(elem.code)||0}
                            updateAmount={updateAmount}
                            item = {elem}
                            setSelectedItem = {setSelectedItem}
                            showCancelButton = {showCancelButton}
                        />
                    )};
            })}
        </div>
    )
};

export default CatalogPage;