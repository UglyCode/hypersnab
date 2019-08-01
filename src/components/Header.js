import React from 'react';
import Logo from './Logo';
import NavSticky from '../containers/NavSicky/NavSticky';

import Login from '../containers/Login/Login';
import BasketCard from './BasketCard';

//TODO
// Implement transparent nav shadow

const Header = ({toggleProfile, setUserStatus, inn, userStatus, route,
                    onRouteChange, orderSum, goodsAmount, updateSearchString}) => {
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
                orderSum={orderSum}
                goodsAmount={goodsAmount}
                updateSearchString={updateSearchString}
            />
            {/*<Login/>*/}
        </div>
    )
};

export default Header;