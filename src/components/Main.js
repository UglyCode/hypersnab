import React from 'react';
import LeftCol from './LeftCol';
import RightCol from './RightCol';
import CurrPage from './CurrPage';
import Catalog from '../containers/Catalog/Catalog';

const Main = ({route, updateAmount, order, orderSum}) => {

        if (route === 'catalog'){
            return (<Catalog
                updateAmount={updateAmount}
                order={order}
            />)
        } else {
            return(
            <div className='f3 flex items-stretch w-100'>
                    <LeftCol/>
                    <div id='center' className='w-80 flex flex-column'>
                        <CurrPage
                            route={route}
                            updateAmount={updateAmount}
                            order={order}
                            orderSum = {orderSum}
                        />
                    </div>
                    <RightCol/>
            </div>
        )}
};

export default Main;