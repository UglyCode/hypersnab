import React from 'react';
import './productCard.css';
import ENV from "../../settings/env";
import PropertiesTable from  "../../components/PropertiesTable";
const SERVER = ENV.server || 'http://localhost:3001';

class ProductCard extends React.Component{

    constructor(props){
        super(props);
        this.state = props.item;
        this.state.attributes = [];
        this.state.initialAmount = this.props.orderedAmount;
    };

    increaseAmount = (event) => {
        this.props.updateAmount(this.state.code,
            Number(event.currentTarget.nextSibling.value) + this.props.item.rate, this.state.rate);
    };

    decreaseAmount = (event) => {
        this.props.updateAmount(this.state.code,
            Number(event.currentTarget.previousSibling.value) - this.props.item.rate, this.state.rate);
    };

    handleAmountEnter = (event) => {
        this.props.updateAmount(this.state.code, event.target.value);
    };

    handleFocusOut = (event) =>{
        this.props.updateAmount(this.state.code, event.target.value, this.state.rate);
    };

    handleFocus = (event) => event.target.select();

    componentDidMount() {
        this.getAttributes();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        this._input.focus();
    }

    getAttributes = () =>{
        fetch(`${SERVER}\\attributes\\${this.state.code}`)
            .then(res=>res.json())
            .then(attributesRes=> {
                this.setState({attributes:attributesRes});
                return attributesRes;
            })
            .catch(e=>console.log(e));
    };

    restoreAmount = ()=>{
        this.props.updateAmount(this.state.code,
            Number(this.state.initialAmount), this.state.rate);
            this.props.clearItem();
    };

    handleKeyPress = (event) =>{

        switch (event.key) {
            case 'Enter':
                this.props.clearItem();
                break;
            case 'Escape':
                this.restoreAmount();
                break;
        };
    };

    render(){

        return (
            <div className='profile-modal'>
                <div onKeyDown={this.handleKeyPress}
                    className="br3 ba b--black-10 mv4 w-100 w-50-m w-50-l mw6 shadow-5 center bg-white tc
                        flex-column content-center justify-center pa2">
                    <div className='flex justify-between'>
                        <div
                            id={'apply'}
                            className='w-10 tc br4 bg-light-blue pa1 f4 hover-dark-blue pointer underline-hover'
                            onClick={this.props.clearItem}>
                            {'Ok'}
                        </div>
                        <div
                            id={'cancel'}
                            className='w-10 tc br4 bg-light-blue pa1 f4 hover-dark-blue pointer underline-hover'
                            onClick={this.restoreAmount}>
                            {'✖'}
                        </div>
                    </div>
                    <div style={{width: '200px'}} className='center'>
                        <img src={`${ENV.imgPath}${this.state.code}.jpg`} className="db" alt='spec img'/>
                    </div>
                        <h2 className="f3 mt2 mb0 black-60 b">
                            {`${this.state.description} (${this.state.code})`}
                        </h2>
                        <dl className="mt2 f3">
                            <dt className="clip">{'Цена'}</dt>
                            <dd className="ml0">{`Цена: ${this.state.price} руб.`}</dd>
                            <dt className="clip">{'Остаток'}</dt>
                            <dd className="ml0">{`Остаток: ${this.state.quantity} ${this.state.measure}`}</dd>
                        </dl>
                    <div className='w-40 center'>
                        {this.state.rate < 2 || <p className='ma0'>{`По ${this.state.rate} ${this.state.measure}`}</p>}
                        <div className='flex justify-between items-center w-100 f3'>
                            <div className='w-20 pointer' onClick={this.increaseAmount}>
                                <img src={require('../../static/plus.png')} className='mw-100'></img>
                            </div>
                            <input id={'amount'} className='h-25 ba w-60 tc' type='number'
                                   pattern="[0-9]*" inputmode="numeric" ref={c => (this._input = c)}
                                   value={this.props.orderedAmount || 0}
                                   onChange={this.handleAmountEnter}
                                   onFocus={this.handleFocus}
                                   onBlur={this.handleFocusOut}/>
                            <div className='w-20 pointer' onClick={this.decreaseAmount}>
                                <img src={require('../../static/minus.png')} className='mw-100'></img>
                            </div>
                        </div>
                    </div>
                    <div className='w-50 center'>
                        <PropertiesTable
                            properties = {this.state.attributes}
                        />
                    </div>
                </div>
            </div>
        );
    };
};

export default ProductCard;