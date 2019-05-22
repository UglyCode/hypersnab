import React from 'react';

const Scroll = (props) =>{

    return (
        <div className='w-80' style={{overflowY: 'scroll', height: 'calc(100vh - 210px)'}}>
            {props.children}
        </div>
    );
};

export default Scroll;