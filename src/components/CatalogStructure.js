import React from 'react';


const CatalogStructure = ({folders, toggleChildren, folderSelect, folder}) => {
    return(

        <div className='w-20 br3 pl3 ma2 bw-2 shadow-5-l bg-lightest-blue f5 tl'>
            {
                folders.map(elem => createFolderElement(elem, toggleChildren, folderSelect, folder))
            }
        </div>
    )
};

const createFolderElement = (folderObj, toggleChildren, folderSelect, folder) => {

    const folderFunction = (folderObj.children.length)? toggleChildren : folderSelect;
    const folderClassList = 'pointer hover-blue underline-hover' + (folderObj.name === folder ? ' b' : ' ');

    return(
        <ul className='pl3' onClick={folderFunction}>
            <li className={folderClassList}>{folderObj.name}</li>
            {
                folderObj.children.map(elem => createFolderElement(elem, toggleChildren, folderSelect, folder))
            }
        </ul>
    );

};


export default CatalogStructure;