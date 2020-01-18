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
            filterShown: undefined
        }
    }

    componentDidMount() {
        this.getFiltersForFolder(this.props.folder);
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

        const selectedValues = this.getSelectedValues(filterDescription.filter_code);
        let filterApplied = (selectedValues && selectedValues.length);

        return(
            <div className={'ma1 pointer underline-hover hover-blue w-30 ' + ((filterApplied) ? 'b' : '')}
                 id={filterDescription.filter_code}
                 onClick={this.filterOnClick}
            >
                {filterDescription.filter_name.toUpperCase()}
            </div>
        )
    }

    filterOnClick = (event) => {
        this.setState({filterShown: event.target});
    };

    applyFilter = (event) => {

        const checked = document.querySelectorAll("input:checked");
        let attributesArray = [];
        checked.forEach(checkbox=>{
            attributesArray.push(checkbox.value);
        });

        const selectedAttributes = this.props.selectedAttributes;
        let selectedValuesIndex = this.getSelectedValues(event.target.id, true);
        if (selectedValuesIndex === undefined){
            selectedAttributes.push({attribute: event.target.id, values: attributesArray});
        } else {
            selectedAttributes[selectedValuesIndex].values = attributesArray;
        }

        this.props.setSelectedAttributes(selectedAttributes);

    };

    getSelectedValues = (filterId, returnIndex=false) => {

        filterId = filterId.toString();
        const selectedAttributes = this.props.selectedAttributes;
        for(let i= 0 ; i <= selectedAttributes.length-1; i++){
            if (selectedAttributes[i].attribute === filterId){
                return (returnIndex) ? i: selectedAttributes[i].values;
            }
        }
        return undefined;
    };

    toggleDropdown(){

        const filterId = this.state.filterShown.id;
        const currentValues = this.state.filterValues.get(filterId);
        if (!currentValues) return;

        const filterMenu = document.getElementById("dropdown");
        if (filterMenu) filterMenu.classList.toggle("dn"); //parentNode.removeChild(filterMenu)

        let selectedValues = this.getSelectedValues(filterId) || [];

        return(
            <ul id='dropdown' key={'dropdown_'+filterId}
                className="absolute pa0"
                style={{top: `${this.state.filterShown.offsetTop+5}px`,
                    left: `${(2*this.state.filterShown.offsetLeft+this.state.filterShown.offsetWidth/2)/2}px`,
                    listStyleType: "none", backgroundColor: 'rgba(255,255,255,0.9)'}}>
                <form className="pa4" key={'form_'+filterId}>
                    <fieldset id="filters" className="bn" key={'filters_'+filterId}>
                        <legend className="fw7 mb2">{`Фильтр ${this.state.filterShown.innerText}`}</legend>
                        {currentValues.map((elem,i) => {
                            return(
                                <div className="flex items-center mb2">
                                    <input className="mr2" type="checkbox"
                                           defaultChecked={selectedValues.includes(elem)} key={`${filterId}_${i}`}
                                           id={`filter_${filterId}_${i}`} value={`${elem}`}/>
                                    <label htmlFor={`filter_${filterId}_${i}`} className="lh-copy tc">{elem}</label>
                                </div>
                            )
                        })}
                    </fieldset>
                    <a id={filterId} className='f6 pointer br1 ba bw1 ph3 pv2 mb2 dib black hover-blue'
                       onClick={this.applyFilter}>
                        {'Применить'}
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

export default AttributeFilters;