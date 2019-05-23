import React from 'react';


const CatalogStructure = (props) => {
    return(

        <div className='w-20 br3 pl3 ma2 bw-2 shadow-5-l bg-lightest-blue f5 tl'>
            <ul className='pl3'>
                <li>
                    {'Категория 1'}
                </li>
                <ul className='pl3'>
                    <li>
                        {'папка 1'}
                    </li>
                    <li>
                        {'папка 2'}
                    </li>
                </ul>
            </ul>
            <ul className='pl3'>
                <li>
                    {'Категория 2'}
                </li>
                <ul className='pl3'>
                    <li>
                        {'папка 3'}
                    </li>
                </ul>
            </ul>
        </div>
    )
};

export default CatalogStructure;