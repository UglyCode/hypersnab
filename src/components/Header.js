import React from 'react';
import BasketCard from './BasketCard';
import Logo from './Logo';
import Login from './Login';

const Header = (props) => {
    return(
        <div className = 'flex justify-between b--dark-red bw1 ba'>
            <BasketCard/>
            <Logo/>
            <Login/>
        </div>
    )
};

export default Header;