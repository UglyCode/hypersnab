import React from 'react';

const  AttributeFilters = (props) => {

    let attributeClassList = 'ma0 pointer underline-hover hover-blue w-30';

    return(
        <div className='bg-lightest-blue pa2 flex items-center justify-around f5'>
            <div className={attributeClassList}>
                {'Ampers'}
            </div>
            <div className={attributeClassList}>
                {'Watts'}
            </div>
            <div className={attributeClassList}>
                {'Volts'}
            </div>
            <ul id='dropdown'
                className="absolute pa0"
                style={{top: '225px', listStyleType: "none", backgroundColor:'rgba(255,255,255,0.9)'}}>
                <form className="pa4">
                    <fieldset id="favorite_movies" className="bn">
                        <legend className="fw7 mb2">Watt filter</legend>
                        <div className="flex items-center mb2">
                            <input className="mr2" type="checkbox" id="spacejam" value="spacejam"/>
                                <label htmlFor="spacejam" className="lh-copy">Space Jam</label>
                        </div>
                        <div className="flex items-center mb2">
                            <input className="mr2" type="checkbox" id="airbud" value="airbud"/>
                                <label htmlFor="airbud" className="lh-copy">Air Bud</label>
                        </div>
                        <div className="flex items-center mb2">
                            <input className="mr2" type="checkbox" id="hocuspocus" value="hocuspocus"/>
                                <label htmlFor="hocuspocus" className="lh-copy">Hocus Pocus</label>
                        </div>
                        <div className="flex items-center mb2">
                            <input className="mr2" type="checkbox" id="diehard" value="diehard"/>
                                <label htmlFor="diehard" className="lh-copy">Die Hard</label>
                        </div>
                    </fieldset>
                    <a className='f6 pointer br1 ba bw1 ph3 pv2 mb2 dib black hover-light-blue'>
                        {'Apply'}
                    </a>
                </form>
            </ul>
        </div>
    );
};

// this.state.isDroppedDown &&
// <ul id='dropdown'
//     className="absolute pa0"
//     style={{top: el.offsetTop, listStyleType: "none", backgroundColor:'rgba(255,255,255,0.8)'}}>
//     <li className='ma3 pointer underline-hover'
//         onClick={this.logOut}>
//         Log out </li>
//     <li className='ma3 pointer underline-hover'
//         onClick={this.openProfile}>
//         Profile
//     </li>
//     <li className='ma3 pointer underline-hover'> Orders </li>
// </ul>

export default AttributeFilters;