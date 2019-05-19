import React from 'react';
import LeftCol from './LeftCol';
import RightCol from './RightCol';
import CurrPage from './CurrPage';

const Main = ({route}) => {
    return (
        <div className='f3 flex items-stretch w-100' > {/*style={{height: 'calc(100% - 4em)'}}*/}
            <LeftCol/>
            <div id='center' className='w-80 flex flex-column'>
                <CurrPage route={route}/>
            </div>
            <RightCol/>
        </div>
    )
};

export default Main;