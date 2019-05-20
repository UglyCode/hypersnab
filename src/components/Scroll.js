import React from 'react';

const Scroll = (props) =>{

    return (
        <div className='w-80' style={{overflowY: 'scroll'}}>
            {props.children}
        </div>
    );
};

export default Scroll;