import React from 'react';
import LeftCol from './LeftCol';
import RightCol from './RightCol';
import CurrPage from './CurrPage';
import Catalog from '../containers/Catalog/Catalog';
import Basket from '../containers/Basket/Basket';

const Main = ({route, setSelectedItem, updateAmount, order, orderSum, shownSpecOffers, userStatus, inn,
                  searchString, updateSearchString, goods, orderAutoUpdated, basketWarningShown}) => {

        if (route === 'catalog'){
            return (
                <Catalog
                    updateAmount={updateAmount}
                    order={order}
                    setSelectedItem = {setSelectedItem}
                    searchString={searchString}
                    updateSearchString={updateSearchString}
                    goods={goods}
                />)
        } else if (route === 'basket'){
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
        } else {
            return(
            <div className='f3 flex items-stretch w-100'>
                    <LeftCol
                        shownSpecOffers={shownSpecOffers}
                        setSelectedItem={setSelectedItem}
                    />
                    <div id='center' className='w-80 flex flex-column'>
                        <CurrPage
                            route={route}
                            updateAmount={updateAmount}
                            order={order}
                            userStatus={userStatus}
                            inn={inn}
                            orderAutoUpdated={orderAutoUpdated}
                            basketWarningShown={basketWarningShown}
                            orderSum = {orderSum}
                            setSelectedItem = {setSelectedItem}
                            goods={goods}
                        />
                    </div>
                    <RightCol
                        shownSpecOffers={shownSpecOffers}
                        setSelectedItem={setSelectedItem}
                    />
            </div>
        )}
};

export default Main;