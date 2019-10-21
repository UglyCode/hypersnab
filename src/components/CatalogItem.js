import React from 'react';
import ENV from "../settings/env";

class CatalogItem extends React.Component{
    constructor(props){
        super(props);
    }

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

    openProductCard = (event) => {
        this.props.setSelectedItem(this.props.item);
    };

    render(){
        const {description, code, set, quantity, price, amount, measure} = this.props;
        const img = `${ENV.imgPath}${code}.jpg`;


        return (
            <div className={`flex items-center w-100 f5 items-center justify-between ${(set%2)?'':'bg-lightest-blue'}`}>
                <p className='w-10 ma0 pointer underline-hover' onClick={this.openProductCard}><img className={'ma0'} src={img}/></p>
                <p className='w-20 ma0 pointer underline-hover tc' onClick={this.openProductCard}>{code}</p>
                <p className='w-100 ma0 pointer underline-hover tl'  onClick={this.openProductCard}>{description}</p>
                <p className='w-20 ma0 tr'>{`${quantity} ${measure}`}</p>
                <p className='w-20 ma0 tc'>{`${Number(price).toFixed(2)}`}</p>
                <div className='flex justify-between items-center w-20'>
                    <div className='w-20 pointer' onClick={this.increaseAmount}>
                        <img src={require('../static/plus.png')} className='mw-100'></img>
                    </div>
                    <input id={'amount'} className='h-25 ba w-60 tc' type='number' value={amount}
                           onChange={this.handleAmountEnter}
                           onFocus={this.handleFocus}/>
                    <div className='w-20 pointer' onClick={this.decreaseAmount}>
                        <img src={require('../static/minus.png')} className='mw-100'></img>
                    </div>
                </div>
                <p className='w-20 ma0'>{`${(amount*price).toFixed(2)}`}</p>
            </div>
        );
    }
};

export default CatalogItem;