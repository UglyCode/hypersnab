import React from 'react';
import CatalogItem from './CatalogItem';

const CatalogPage = ({goods}) => {
    return(
        <div className="flex-column w-100 br3 bg-white pa3 ma2">
            {goods.length && goods.map((elem, i) => {
                return (
                    <CatalogItem
                        key={i}
                        set={i}
                        code={elem.code}
                        description={elem.description}
                        img={elem.img}
                    />
                );
            })}
        </div>
    )
};

export default CatalogPage;