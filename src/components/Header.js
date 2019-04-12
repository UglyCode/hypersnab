import React from 'react';
import Logo from './Logo';
import NavSticky from '../containers/NavSticky';

import Login from '../containers/Login';
import BasketCard from './BasketCard';

const Header = (props) => {
    return(
        <div className = 'flex flex-column content-stretch'>
            {/*<BasketCard/>*/}
            <Logo/>
            <NavSticky/>
            {/*<Login/>*/}
        </div>
    )
};

export default Header;