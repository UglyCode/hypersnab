import React from 'react';
import LeftCol from './LeftCol';
import RightCol from './RightCol';
import CurrPage from './CurrPage';
import Catalog from '../containers/Catalog/Catalog';

const Main = ({route}) => {

        if (route === 'catalog'){
            return (<Catalog/>)
        } else {
            return(
            <div className='f3 flex items-stretch w-100'>
                    <LeftCol/>
                    <div id='center' className='w-80 flex flex-column'>
                        <CurrPage route={route}/>
                    </div>
                    <RightCol/>
            </div>
        )}
};

export default Main;