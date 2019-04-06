import React from 'react';
import CardList from './CardList';
import Scroll from './Scroll';

const RightCol = (props) => {
    return(
        <main className="flex flex-column justify-between w-10 outline">
            {/*<Scroll>*/}
                <CardList/>
            {/*</Scroll>*/}
        </main>
    )
};

export default RightCol;