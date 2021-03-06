import React from 'react';


//TODO
//  add code to folder obj, use code as id for element
const CatalogStructure = ({folders, toggleChildren, folderSelect, folder}) => {
    return(
        <div className='h-100 w-100 br3 pl3 pt1 bw-2 bg-lightest-blue f5 tl'>
            {
                folders.map(elem => createFolderElement(elem, toggleChildren, folderSelect, folder))
            }
        </div>
    )
};

const createFolderElement = (folderObj, toggleChildren, folderSelect, folder) => {

    const folderHasChildren = !!folderObj.children.length;
    const folderFunction = (folderHasChildren) ? toggleChildren : folderSelect;
    const folderClassList = 'mt1 pointer hover-blue underline-hover'
            + (folderObj.code === folder ? ' b' : '');
          //  + (folderHasChildren ? '' : ' dn');

    return(
        <ul className='pl3'>
            <li id={folderObj.code} className={folderClassList} onClick={folderFunction}>{folderObj.name}</li>
            {
                folderObj.children.map(elem => createFolderElement(elem, toggleChildren, folderSelect, folder))
            }
        </ul>
    );

};


export default CatalogStructure;