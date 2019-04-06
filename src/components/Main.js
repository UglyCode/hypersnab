import React from 'react';
import LeftCol from './LeftCol';
import RightCol from './RightCol';
import NavSticky from './NavSticky';
import CurrPage from './CurrPage';
import Scroll from './Scroll';

const Main = (props) => {
    return (
        <div className='f3 flex items-stretch w-100 b--dark-green bw1 ba h-100'>
            <LeftCol/>
            <div id='center' className='w-80 flex flex-column'>
                <NavSticky/>
                <Scroll>
                    <CurrPage/>
                </Scroll>
            </div>
            <RightCol/>
        </div>
    )
};

export default Main;