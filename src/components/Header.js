import React from 'react';
import Logo from './Logo';
import NavSticky from '../containers/NavSticky';

import Login from '../containers/Login';
import BasketCard from './BasketCard';

//TODO
// Implement transparent nav shadow

const Header = ({toggleProfile, setUserStatus, inn, userStatus, route, onRouteChange}) => {
    return(
        <div className = 'flex flex-column content-stretch'>
            {/*<BasketCard/>*/}
            <Logo/>
            <NavSticky
                toggleProfile ={toggleProfile}
                setUserStatus = {setUserStatus}
                inn = {inn}
                userStatus={userStatus}
                route={route}
                onRouteChange={onRouteChange}
            />
            {/*<Login/>*/}
        </div>
    )
};

export default Header;