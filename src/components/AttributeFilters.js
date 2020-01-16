import React from 'react';
import ENV from "../settings/env";
const SERVER = ENV.server || 'http://localhost:3001';

class  AttributeFilters extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            attributeClassList: 'ma0 pointer underline-hover hover-blue w-30',
            filters: [],
            filterValues: new Map(),
            selectedValues: new Map(),
            filterShown: undefined
        }
    }

    componentDidMount() {
        this.getFiltersForFolder(this.props.folder);
        this.updateSelectedValues(this.props.selectedAttributes);
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     this.setState({filterShown: undefined});
    //     this.updateSelectedValues(this.props.selectedAttributes);
    // }

    updateSelectedValues(attributesArray){
        let attributesMap = new Map();
        attributesArray.forEach((elem) => {
           attributesMap.set(elem.attribute, elem.values);
        });
        this.setState({selectedValues: attributesMap});
    }

    getFiltersForFolder(folderCode){
        // fetch(SERVER + `\\filters\\${folderCode}`)
        //     .then(res=>res.json())
        //     .then(filtersRes=> {
        //         let filters = [];
        //         let filterValues = new Map();
        //         filtersRes.forEach(elem=>{
        //             filters.push({filter_code: filtersRes.filter_code, filter_name: filtersRes.filter_name});
        //             filterValues.set(elem.filter_code, elem.values);
        //         });
        //         this.setState({filters:filters, filterValues: filterValues});
        //     })
        //     .catch(e=>console.log(e));

        let filters = [];
        let filterValues = new Map();
        filters.push({filter_code: 111, filter_name: 'super!'});
        filterValues.set('111', ['1A','2A','4A','8A','16A','32A']);
        filters.push({filter_code: 222, filter_name: 'poppers!'});
        filterValues.set('222', ['1Wt','2Wt','4Wt','8Wt','16Wt','32Wt']);
        this.setState({filters:filters, filterValues: filterValues});
    }

    createFilterElement(filterDescription){
        return(
            <div className={this.state.attributeClassList}
                 id={filterDescription.filter_code}
                 onClick={this.filterOnClick.bind(this)}
            >
                {filterDescription.filter_name}
            </div>
        )
    }

    filterOnClick(event){
        this.setState({filterShown: event.target});
    }

    applyFilter(event){

        const checked = document.querySelectorAll("input:checked");
        let attributesArray = [];
        checked.forEach(checkbox=>{
            attributesArray.push(checkbox.value);
        });

        let attributesMap = this.state.selectedValues;
        attributesMap.set(event.target.id, attributesArray);

        let selectedAttributes = [];
        attributesMap.forEach((value, key) =>{
            selectedAttributes.push({attribute: key , values:value})
        });
        this.props.setSelectedAttributes(selectedAttributes);

    }

    toggleDropdown(){

        const filterId = this.state.filterShown.id;
        const currentValues = this.state.filterValues.get(filterId);
        if (!currentValues) return;

        const filterMenu = document.getElementById("dropdown");
        if (filterMenu) filterMenu.classList.toggle("dn");

        return(
            <ul id='dropdown'
                className="absolute pa0"
                style={{top: `${this.state.filterShown.offsetTop+5}px`,
                    left: `${(2*this.state.filterShown.offsetLeft+this.state.filterShown.offsetWidth/2)/2}px`,
                    listStyleType: "none", backgroundColor: 'rgba(255,255,255,0.9)'}}>
                <form className="pa4">
                    <fieldset id="filters" className="bn">
                        <legend className="fw7 mb2">{`Фильтр ${this.state.filterShown.innerText}`}</legend>
                        {currentValues.map((elem,i) => {
                            return(
                                <div className="flex items-center mb2">
                                    <input className="mr2" type="checkbox"
                                           defaultChecked={this.state.selectedValues.get(filterId) &&
                                            this.state.selectedValues.get(filterId).includes(elem)}
                                           id={`filter_${filterId}_${i}`} value={`${elem}`}/>
                                    <label htmlFor="spacejam" className="lh-copy">{elem}</label>
                                </div>
                            )
                        })}
                    </fieldset>
                    <a id={filterId} className='f6 pointer br1 ba bw1 ph3 pv2 mb2 dib black hover-blue'
                       onClick={this.applyFilter.bind(this)}>
                        {'Apply'}
                    </a>
                </form>
            </ul>
        )
    }

    render() {
        return(
            <div className='bg-lightest-blue ma1 pa2 flex items-center justify-around f5'>
                {this.state.filters.map(elem=>this.createFilterElement(elem))}
                {this.state.filterShown && this.toggleDropdown()}
            </div>
        )
    };
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

{/*<div className={this.state.attributeClassList}>*/}
{/*    {'Ampers'}*/}
{/*</div>*/}
{/*<div className={this.state.attributeClassList}>*/}
{/*    {'Watts'}*/}
{/*</div>*/}
{/*<div className={this.state.attributeClassList}>*/}
{/*    {'Volts'}*/}
{/*</div>*/}
{/*<ul id='dropdown'*/}
{/*    className="absolute pa0"*/}
{/*    style={{top: '225px', listStyleType: "none", backgroundColor: 'rgba(255,255,255,0.9)'}}>*/}
{/*    <form className="pa4">*/}
{/*        <fieldset id="favorite_movies" className="bn">*/}
{/*            <legend className="fw7 mb2">Watt filter</legend>*/}
{/*            <div className="flex items-center mb2">*/}
{/*                <input className="mr2" type="checkbox" id="spacejam" value="spacejam"/>*/}
{/*                <label htmlFor="spacejam" className="lh-copy">Space Jam</label>*/}
{/*            </div>*/}
{/*            <div className="flex items-center mb2">*/}
{/*                <input className="mr2" type="checkbox" id="airbud" value="airbud"/>*/}
{/*                <label htmlFor="airbud" className="lh-copy">Air Bud</label>*/}
{/*            </div>*/}
{/*            <div className="flex items-center mb2">*/}
{/*                <input className="mr2" type="checkbox" id="hocuspocus" value="hocuspocus"/>*/}
{/*                <label htmlFor="hocuspocus" className="lh-copy">Hocus Pocus</label>*/}
{/*            </div>*/}
{/*            <div className="flex items-center mb2">*/}
{/*                <input className="mr2" type="checkbox" id="diehard" value="diehard"/>*/}
{/*                <label htmlFor="diehard" className="lh-copy">Die Hard</label>*/}
{/*            </div>*/}
{/*        </fieldset>*/}
{/*        <a className='f6 pointer br1 ba bw1 ph3 pv2 mb2 dib black hover-blue'>*/}
{/*            {'Apply'}*/}
{/*        </a>*/}
{/*    </form>*/}
{/*</ul>*/}

export default AttributeFilters;