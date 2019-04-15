import React from 'react';
import Logo from './Logo';
import NavSticky from '../containers/NavSticky';

import Login from '../containers/Login';
import BasketCard from './BasketCard';

const Header = ({toggleProfile, setUserData}) => {
    return(
        <div className = 'flex flex-column content-stretch'>
            {/*<BasketCard/>*/}
            <Logo/>
            <NavSticky toggleProfile ={toggleProfile} setUserData={setUserData}/>
            {/*<Login/>*/}
        </div>
    )
};

export default Header;