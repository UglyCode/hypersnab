import React from 'react';
import './productCard.css';
import ENV from "../../settings/env";

class ProductCard extends React.Component{

    constructor(props){
        super(props);
        this.state = props.item;
    };

    increaseAmount = (event) => {
        this.props.updateAmount(this.state.code, ++event.currentTarget.nextSibling.value);
    };

    decreaseAmount = (event) => {
        this.props.updateAmount(this.state.code, --event.currentTarget.previousSibling.value);
    };

    handleAmountEnter = (event) => {
        this.props.updateAmount(this.state.code, event.target.value);
    };

    handleFocus = (event) => event.target.select();


    render(){

        return (
            <div className='profile-modal'>
                <div
                    className="br3 ba b--black-10 mv4 w-100 w-50-m w-50-l mw6 shadow-5 center bg-white tc
                        flex-column content-center justify-center pa2">
                    <div className='flex justify-end'>
                        <div
                            className='w-10 tc br4 bg-light-blue pa1 f4 hover-dark-blue pointer underline-hover'
                            onClick={this.props.clearItem}>
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
                            <dd className="ml0">{`Остаток: ${this.state.quantity} ${this.state.measure}.`}</dd>
                        </dl>
                    <div className='w-40 center'>
                        <div className='flex justify-between items-center w-100 f3'>
                            <div className='w-20 pointer' onClick={this.increaseAmount}>
                                <img src={require('../../static/plus.png')} className='mw-100'></img>
                            </div>
                            <input id={'amount'} className='h-25 ba w-60 tc' type='number' value={this.props.orderedAmount || 0}
                                   onChange={this.handleAmountEnter}
                                   onFocus={this.handleFocus}/>
                            <div className='w-20 pointer' onClick={this.decreaseAmount}>
                                <img src={require('../../static/minus.png')} className='mw-100'></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default ProductCard;