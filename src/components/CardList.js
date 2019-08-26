import React from 'react';
import ENV from "../settings/env";
import SpecOffer from './SpecOffer';

const CardList = (props) => {
    return(
        <main className="mw6 center">
            {props.shownSpecOffers.map(elem => {
                return <SpecOffer
                    img={`${ENV.imgPath}${elem.code}.jpg`}
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