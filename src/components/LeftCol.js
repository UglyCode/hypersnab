import React from 'react';
import CardList from './CardList';
import Scroll from './Scroll';

const LeftCol = (props) => {
    return(
        <main className="flex flex-column justify-between w-10 br3 pa3 ma2 bw-2 shadow-5-l tc bg-white">
            {/*<Scroll>*/}
                <CardList/>
            {/*</Scroll>*/}
        </main>
    )
};

export default LeftCol;