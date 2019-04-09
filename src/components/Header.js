import React from 'react';
import BasketCard from './BasketCard';
import Logo from './Logo';
import Login from './Login';

const Header = (props) => {
    return(
        <div className = 'flex justify-between br3 pa3 ma2 bw-2 shadow-5-l tc bg-white'>
            <BasketCard/>
            <Logo/>
            <Login/>
        </div>
    )
};

export default Header;