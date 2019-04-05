import React from 'react';

const NavSticky = (props) => {

    return(
        <nav className="bt bb w-100">
            <a className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" href="/">Catalog</a>
            <a className="f6 f5-l link bg-animate black-80 hover-bg-light-pink dib pa3 ph4-l" href="/">About</a>
            <a className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" href="/">Contacts</a>
            <div className="dib ph4-l ml7">
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