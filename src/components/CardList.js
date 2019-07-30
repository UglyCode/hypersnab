import React from 'react';

import SpecOffer from './SpecOffer';

const CardList = (props) => {
    return(
        <main className="mw6 center">
            {props.shownSpecOffers.map(elem => {
                return <SpecOffer
                    img={elem.img}
                    price={elem.price}
                    description={elem.description}
                    item={elem}
                    setSelectedItem={props.setSelectedItem}
                />
                })
            }
        </main>
    )
};

export default CardList;