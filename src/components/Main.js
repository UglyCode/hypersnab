import React from 'react';
import LeftCol from './LeftCol';
import RightCol from './RightCol';
import NavSticky from './NavSticky';
import CurrPage from './CurrPage';
import Scroll from './Scroll';
import Footer from '../components/Footer';

const Main = (props) => {
    return (
        <div className='f3 flex items-stretch w-100' style={{height: 'calc(100% - 4em)'}}>
            <LeftCol/>
            <div id='center' className='w-80 flex flex-column'>
                <NavSticky/>
                <Scroll>
                    <CurrPage/>
                    <Footer/>
                </Scroll>

            </div>
            <RightCol/>
        </div>
    )
};

export default Main;