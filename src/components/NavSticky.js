import React from 'react';
import BasketCard from './BasketCard';
import Login from './Login';

const NavSticky = (props) => {

    return(
        <nav className="br3 ma2 bw-2 shadow-5-l tc bg-white">
            <a className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" href="/">Catalog</a>
            <a className="f6 f5-l link bg-animate black-80 hover-bg-light-pink dib pa3 ph4-l" href="/">About</a>
            <a className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" href="/">Contacts</a>
            <div className="dib ph4-l">
                <input
                    className="f6 f5-l"
                    placeholder="search text" type="text" name="searchText" value="">
                </input>
                <input
                    className="f6 f5-l button-reset"
                    type="submit" value="Search">
                </input>
            </div>
        </nav>
    )
};

export default NavSticky;