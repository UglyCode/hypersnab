import React from 'react';
import CardList from './CardList';
import Scroll from './Scroll';

const LeftCol = (props) => {
    //console.log('left', props.shownSpecOffers.splice(0,props.shownSpecOffers.length/2));
    return(
        <main className="flex flex-column justify-between w-20 br3 pa3 ma2 bw-2 shadow-5-l tc bg-lightest-blue">
            {/*<Scroll>*/}
                <CardList
                    shownSpecOffers={props.shownSpecOffers.slice(0,props.shownSpecOffers.length/2)}
                    setSelectedItem={props.setSelectedItem}
                />
            {/*</Scroll>*/}
        </main>
    )
};

export default LeftCol;