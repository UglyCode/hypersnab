import React from 'react';
import './productCard.css';

class ProductCard extends React.Component{

    constructor(props){
        super(props);
        this.state = props.item;
    };

    increaseAmount = (event) => {
        this.props.updateAmount(this.props.code, ++event.currentTarget.nextSibling.value);
    };

    decreaseAmount = (event) => {
        this.props.updateAmount(this.props.code, --event.currentTarget.previousSibling.value);
    };

    handleAmountEnter = (event) => {
        this.props.updateAmount(this.props.code, event.target.value);
    };

    handleFocus = (event) => event.target.select();


    render(){

        console.log(this.props.item, this.state);

        return (
            <div className='flex-column content-center product-modal'>
                <div
                    className='br3 f4 bg-light-blue hover-dark-blue'
                onClick={this.props.clearItem}>
                    {'X'}
                </div>
                    <div style={{width: '175px'}} className='center'>
                        <img src={this.state.img} className="db" alt='spec img'/>
                    </div>
                    <div className="v-top pl2 tc">
                        <h2 className="f6 fw4 mt2 mb0 black-60 b">
                            {`${this.state.description} (${this.state.code})`}
                        </h2>
                        <dl className="mt2 f6">
                            <dt className="clip">Цена</dt>
                            <dd className="ml0">{this.state.price}</dd>
                            <dt className="clip">Остатток</dt>
                            <dd className="ml0">{`${this.state.quantity} ${this.state.measure}.`}</dd>
                        </dl>
                        <div className='flex justify-between items-center w-20'>
                            <div className='w-20 pointer' onClick={this.increaseAmount}>
                                <img src={require('../../static/plus.png')} className='mw-100'></img>
                            </div>
                            <input id={'amount'} className='h-25 ba w-60 tc' type='number' value={this.state.amount}
                                   onChange={this.handleAmountEnter}
                                   onFocus={this.handleFocus}/>
                            <div className='w-20 pointer' onClick={this.decreaseAmount}>
                                <img src={require('../../static/minus.png')} className='mw-100'></img>
                            </div>
                        </div>
                    </div>
            </div>
        );
    };
};

export default ProductCard;