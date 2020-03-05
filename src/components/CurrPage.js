import React from 'react';
import ContactPage from './ContactPage';
import AboutPage from './AboutPage';
import Basket from '../containers/Basket/Basket';
import Catalog from "../containers/Catalog/Catalog";
import OrderList from "../containers/OrderList/OrderList";
import Bill from "../containers/Bills/Bill";

const CurrPage = ({route, updateAmount, order, orderSum, setSelectedItem, goods,
                      inn, userStatus, orderAutoUpdated, basketWarningShown}) => {
    console.log(route);
    return(
        <div className="br3 ma2 bw-2 shadow-5-l tc bg-white pa1">
            {(() => {
                switch(route) {
                    case 'bill':
                        return <Bill/>
                        break;
                    case 'about':
                        return <AboutPage/>;
                        break;
                    case 'contacts':
                        return <ContactPage/>;
                        break;
                    case 'orderList':
                        return <OrderList inn={inn}/>;
                        break;
                    case 'basket':
                        return <Basket updateAmount={updateAmount}
                                       order={order}
                                       orderSum={orderSum}
                                       userStatus={userStatus}
                                       orderAutoUpdated={orderAutoUpdated}
                                       basketWarningShown={basketWarningShown}
                                       setSelectedItem = {setSelectedItem}
                                       goods={goods}
                                       inn={inn}
                        />;
                    default:
                        return null;
                }
            })()}
        </div>
    )
};

export default CurrPage;