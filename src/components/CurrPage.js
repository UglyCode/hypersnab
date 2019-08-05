import React from 'react';
import ContactPage from './ContactPage';
import AboutPage from './AboutPage';
import Basket from '../containers/Basket/Basket';
import Catalog from "../containers/Catalog/Catalog";

const CurrPage = ({route, updateAmount, order, orderSum, setSelectedItem}) => {
    console.log(route);
    return(
        <div className="br3 ma2 bw-2 shadow-5-l tc bg-white pa1">
            {(() => {
                switch(route) {
                    case 'about':
                        return <AboutPage/>;
                        break;
                    case 'contacts':
                        return <ContactPage/>;
                        break;
                    case 'basket':
                        return <Basket updateAmount={updateAmount}
                                       order={order}
                                       orderSum={orderSum}
                                       setSelectedItem = {setSelectedItem}
                        />;
                    default:
                        return null;
                }
            })()}
        </div>
    )
};

export default CurrPage;