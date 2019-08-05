import React from 'react';
import LeftCol from './LeftCol';
import RightCol from './RightCol';
import CurrPage from './CurrPage';
import Catalog from '../containers/Catalog/Catalog';

const Main = ({route, setSelectedItem, updateAmount, order, orderSum, shownSpecOffers, searchString}) => {

        if (route === 'catalog'){
            return (
                <Catalog
                    updateAmount={updateAmount}
                    order={order}
                    setSelectedItem = {setSelectedItem}
                    searchString={searchString}
                />)
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
                            orderSum = {orderSum}
                            setSelectedItem = {setSelectedItem}
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