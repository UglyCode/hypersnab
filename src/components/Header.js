import React from 'react';
import Logo from './Logo';
import NavSticky from '../containers/NavSticky';

import Login from '../containers/Login';
import BasketCard from './BasketCard';

const Header = ({toggleProfile, setUserData, inn, isSignedIn}) => {
    return(
        <div className = 'flex flex-column content-stretch'>
            {/*<BasketCard/>*/}
            <Logo/>
            <NavSticky
                toggleProfile ={toggleProfile}
                inn={inn}
                isSignedIn={isSignedIn}
            />
            {/*<Login/>*/}
        </div>
    )
};

export default Header;