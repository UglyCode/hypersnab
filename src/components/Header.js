import React from 'react';
import Logo from './Logo';
import NavSticky from '../containers/NavSticky';

import Login from '../containers/Login';
import BasketCard from './BasketCard';

const Header = ({toggleProfile, setUserStatus, inn, userStatus}) => {
    return(
        <div className = 'flex flex-column content-stretch'>
            {/*<BasketCard/>*/}
            <Logo/>
            <NavSticky
                toggleProfile ={toggleProfile}
                setUserStatus = {setUserStatus}
                inn = {inn}
                userStatus={userStatus}
            />
            {/*<Login/>*/}
        </div>
    )
};

export default Header;