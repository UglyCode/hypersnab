import React from 'react';
import LeftCol from './LeftCol';
import RightCol from './RightCol';
import NavSticky from './NavSticky';
import CurrPage from './CurrPage';

const Main = (props) => {
    return (
        <div className='f3 fl w-100 b--dark-green bw1 ba vh-75'>
            <LeftCol/>
            <div id='center' className='fl w-80'>
                <NavSticky/>
                <CurrPage/>
            </div>
            <RightCol/>
        </div>
    )
};

export default Main;